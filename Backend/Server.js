const express = require("express");
const mongoose = require("mongoose");
const storyRoutes = require("./routes/storyRoutes");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const scrapeNews = require("./Scraper/scrapeNews");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/stories", storyRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/scrape", async (req, res) => {
  await scrapeNews();
  res.send("News Scraped Successfully");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log("MongoDB Connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})
.catch((err) => {
  console.log(err);
});