const express = require("express");
const { createPost, updatePost, deletePost, getAllPost } = require("../controllers/post.controller");
const { createPostValidator, updatePostValidator, deletePostValidator } = require("../validators/post.validator");

const postRoute = express.Router();

postRoute.post("/", createPostValidator, createPost);
postRoute.get("/", getAllPost);
postRoute.patch("/:id", updatePostValidator, updatePost);
postRoute.delete("/:id", deletePostValidator, deletePost);

module.exports = postRoute;