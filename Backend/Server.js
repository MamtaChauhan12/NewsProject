const express = require("express");
const mongoose = require("mongoose");
const storyRoutes = require("./routes/storyRoutes");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const scrapeNews = require("./Scraper/scrapeNews");
const app = express();


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

mongoose.connect("mongodb://127.0.0.1:27017/newsDB")
.then(() => {

  console.log("MongoDB Connected");


  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });

})
.catch((err) => {
  console.log(err);
});