const PostService = require("../services/post.service");
const jwt = require("jsonwebtoken");

const createPost = async (req, res) => {
  try {
    const postService = new PostService();
    const { name, body } = req.body;
    const post = await postService.createPost(name, body);
    res.status(201).json({
      data: post,
      success: true,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllPost = async (req, res) => {
  try {
    const postService = new PostService();
    const post = await postService.getAllPost();
    res.status(200).json({
      data: post,
      success: true,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const postService = new PostService();
    const { id } = req.params;
    const { name, body } = req.body;
    const post = await postService.updatePost(id, name, body);
    res.status(201).json({
      data: post,
      success: true,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const postService = new PostService();
    const { id } = req.params;
    const post = await postService.deletePost(id);
    res.status(200).json({
      data: post,
      success: true,
      message: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPost,
  deletePost,
  updatePost,
  getAllPost,
};
