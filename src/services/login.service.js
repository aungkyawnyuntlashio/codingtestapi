const mongoose = require('mongoose');
const loginSchemaModel = require('../models/login.model');

module.exports = class LoginService {
    constructor() {
        this.loginModel = mongoose.model('login', loginSchemaModel, 'login');
    }

    async login(username, password) {
        return await this.loginModel.findOne({ username: username, password: password }, { username: 1, _id: 1 });
    }

    async register(username, password) {
        return await this.loginModel.create({ username: username, password: password });
    }
}