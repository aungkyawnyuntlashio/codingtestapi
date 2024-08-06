const mongoose = require('mongoose');
const postSchemaModel = require('../models/post.model');

module.exports = class PostService {
    constructor() {
        this.postModel = mongoose.model('post', postSchemaModel, 'post');
    }

    async createPost(name, body) {
        return await this.postModel.create({ name: name, body: body });
    }

    async getAllPost() {
        return await this.postModel.find();
    }

    async deletePost(id) {
        return await this.postModel.deleteOne({ _id: id });
    }

    async updatePost(id, name, body) {
        return await this.postModel.updateOne({ _id: id }, { name: name, body: body });
    }
}