const express = require("express");

const {
  createArticle,
  getArticles,
  getArticleById,
} = require("../controllers/articleController");

const router = express.Router();

// ==========================
// GET All Articles
// ==========================
router.get("/", getArticles);

// ==========================
// GET Single Article
// ==========================
router.get("/:id", getArticleById);

// ==========================
// POST New Article
// ==========================
router.post("/", createArticle);

module.exports = router;
