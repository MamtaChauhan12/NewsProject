const Story = require("../Models/Story");

const getStories = async (req, res) => {

  try {

    const stories = await Story.find();

    res.json(stories);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const toggleBookmark = async (req, res) => {

  try {

    const storyId = req.params.id;
    const userId = req.user.id;

    const story = await Story.findById(storyId);

    if (!story) {

      return res.status(404).json({
        message: "Story not found",
      });

    }

    if (!story.bookmarkedBy) {
      story.bookmarkedBy = [];
    }

    const alreadyBookmarked =
      story.bookmarkedBy.some(
        (id) => id.toString() === userId
      );

    if (alreadyBookmarked) {

      story.bookmarkedBy =
        story.bookmarkedBy.filter(
          (id) => id.toString() !== userId
        );

      await story.save();

      return res.json({
        message: "Bookmark removed",
      });

    }

    story.bookmarkedBy.push(userId);

    await story.save();

    return res.json({
      message: "Story bookmarked",
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }

};
const getBookmarkedStories = async (req, res) => {

  try {

    const userId = req.user.id;

    const stories = await Story.find({
      bookmarkedBy: userId,
    });

    res.json(stories);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
module.exports = {
  getStories,
  toggleBookmark,
  getBookmarkedStories,
};