const express = require("express");

const router = express.Router();

const {
  getStories,
  toggleBookmark,
} = require("../controllers/storyController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", getStories);

router.post(
  "/:id/bookmark",
  authMiddleware,
  toggleBookmark
);

module.exports = router;