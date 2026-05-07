const express = require("express");

const router = express.Router();

const Story = require("../Models/Story");

router.get("/", async (req, res) => {

  try {

    const stories = await Story.find();

    res.json(stories);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;