var mongo = require('./db');

// var Schema = mongo.Schema;

var UsersSchema = mongo.Schema({
    cpf: { type: String, index: true, unique: true, required: true, trim: true },
    email: { type: String, index: true, unique: true, required: true, trim: true },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true,
    },
    passwordConf: {
        type: String,
        required: true,
    }
}, { versionKey: false });

var model = mongo.model('users', UsersSchema, 'users');

module.exports = model;