const express = require("express");
const { createPost, updatePost, deletePost, getAllPost } = require("../controllers/post.controller");
const { createPostValidator, updatePostValidator, deletePostValidator } = require("../validators/post.validator");
const { verifyToken } = require("../middlewares/authVerify");

const postRoute = express.Router();

postRoute.post("/",verifyToken, createPostValidator, createPost);
postRoute.get("/",verifyToken, getAllPost);
postRoute.patch("/:id",verifyToken, updatePostValidator, updatePost);
postRoute.delete("/:id",verifyToken, deletePostValidator, deletePost);

module.exports = postRoute;