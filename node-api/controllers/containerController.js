const express = require('express');
const router = express.Router();
const bd = require('../bd/ligacao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authToken = require('../token/secret.json');
const User = require('../models/user');
const Container = require('../models/container');
const code = require('../models/DDCCFF');
const { v4: uuidv4 } = require('uuid');
const authMiddleware = require('../middlewares/auth');
const ddccff = require('../models/DDCCFF');
const { map } = require('modern-async');
const mongoose = require('mongoose');
router.use(authMiddleware);

router.get('/', async(req, res) => {
    try {
        const { token } = req.session
        const payload = jwt.verify(token, authToken.secret);
        const user = await User.findById(payload.id);

        if (!user) {
            return res.status(400).send("User not found");
        }

        if (user.permission === 'view') {
            return res.status(400).send("You are not authorized to do this");
        }
        const location = await ddccff.find({ code: '160948' })
        console.log(location)
        const containers = await Container.find().populate('ddccff._id');
        const data = []
        containers.forEach((q) => {
            data.push({
                ...q._doc,
                ddccff: location
            })
        })

        return res.json(data);

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error loading containers' })
    }
})

router.post('/containers/byParish', async(req, res) => {
    try {


        var code = { ddccff: req.body };
        const containers = await Container.find(code).populate('ddccff');


        res.json(containers);

    } catch (err) {
        res.json({ message: err })
    }

});

router.get('/:containerId', async(req, res) => {
    try {
        const { token } = req.session
        const payload = jwt.verify(token, authToken.secret);
        const user = await User.findById(payload.id);

        if (!user) {
            return res.status(400).send("User not found");
        }

        if ((user.permission === 'view') || (user.permission === 'viewEmployee')) {
            return res.status(400).send("You are not authorized to do this");
        }

        const container = await Container.findById(req.params.containerId).populate(['ddccff']);
        return res.json({ container });

    } catch (error) {
        return res.status(400).send({ error: 'Error loading container' })
    }
})


router.post('/', async(req, res) => {


    try {
        const { token } = req.session
        const payload = jwt.verify(token, authToken.secret);
        const user = await User.findById(payload.id);

        if (!user) {
            return res.status(400).send("User not found");
        }

        if ((user.permission === 'view') || (user.permission === 'viewEmployee')) {
            return res.status(400).send("You are not authorized to do this");
        }

        const _id = uuidv4();

        console.log(req.body)


        const container = await Container.create({...req.body, _id });
        return res.send({ container });


    } catch (err) {
        return res.status(400).send({ error: 'Error creating new container' });
    }
});

router.put('/:containerId', authMiddleware, async(req, res) => {
    try {

        const { token } = req.session
        const payload = jwt.verify(token, authToken.secret);
        const user = await User.findById(payload.id);

        if (!user) {
            return res.status(400).send("User not found");
        }

        if ((user.permission === 'view') || (user.permission === 'viewEmployee')) {
            return res.status(400).send("You are not authorized to do this");
        }

        let code = req.body.ddccff;

        const { container_cod, gpsLocation, adress } = req.body;
        const containers = await Container.findByIdAndUpdate(req.params.containerId, {
            container_cod,
            gpsLocation,
            adress,
            ddccff: code
        }, { new: true });

        await containers.save();

        return res.send({ Container });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating container' })
    }
});

router.delete('/:containerId', authMiddleware, async(req, res) => {
    try {
        const { token } = req.session
        const payload = jwt.verify(token, authToken.secret);
        const user = await User.findById(payload.id);

        if (!user) {
            return res.status(400).send("User not found");
        }

        if (user.permission !== 'admin') {
            return res.status(400).send("You are not authorized to do this");
        }

        await Container.findByIdAndRemove(req.params.containerId);
        return res.status(200).send({ message: 'Container deleted' });

    } catch (err) {
        return res.json({ error: 'Error deleting container' });
    }
});

module.exports = router;