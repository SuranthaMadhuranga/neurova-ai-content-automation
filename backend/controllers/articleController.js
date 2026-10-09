const Article = require("../models/Article");

// ==========================
// Create Article
// ==========================
const createArticle = async (req, res) => {
  console.log("========== BODY ==========");
  console.log(req.body);
  console.log("==========================");

  try {
    const article = await Article.create(req.body);

    res.status(201).json({
      success: true,
      message: "Article created successfully",
      data: article,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get All Articles
// ==========================
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({
      published_at: -1,
    });

    res.status(200).json({
      success: true,
      count: articles.length,
      data: articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Single Article
// ==========================
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
};
