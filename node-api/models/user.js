const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now
    },
    keys: [{
        type: mongoose.SchemaTypes.String,
        ref: 'key'
    }],
    // location: {
    //     type: String,
    //     required: true
    // },
    permission: {
        type: String,
        required: false,
        default: "view",
    }
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('user', UserSchema);

module.exports = User;