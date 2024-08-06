const mongoose = require('mongoose');
const { Schema } = mongoose;

const loginSchemaModel = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = loginSchemaModel;