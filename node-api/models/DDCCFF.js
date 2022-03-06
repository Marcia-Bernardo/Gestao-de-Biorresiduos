const mongoose = require('mongoose');

const DDCCFFSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    code: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }


});

const DDCCFF = mongoose.model('DDCCFF', DDCCFFSchema);

module.exports = DDCCFF;