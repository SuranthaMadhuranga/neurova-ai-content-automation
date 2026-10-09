const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    reason: {
      type: String,
      required: true,
    },

    article: {
      type: String,
      required: true,
    },

    // NEW FIELD
    excerpt: {
      type: String,
      required: true,
    },

    source_url: {
      type: String,
      required: true,
    },

    image_url: {
      type: String,
      default: "",
    },

    image_public_id: {
      type: String,
      default: "",
    },

    published_at: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Article", articleSchema);
