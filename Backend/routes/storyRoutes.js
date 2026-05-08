const express = require("express");

const router = express.Router();

const {
  getStories,
  toggleBookmark,
  getBookmarkedStories,
} = require("../controllers/storyController");

const authMiddleware = require("../middleware/authMiddleware");

router.get(
  "/",
  getStories
);

router.get(
  "/bookmarks",
  authMiddleware,
  getBookmarkedStories
);

router.post(
  "/:id/bookmark",
  authMiddleware,
  toggleBookmark
);

module.exports = router;