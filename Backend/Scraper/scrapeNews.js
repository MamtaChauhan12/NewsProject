const axios = require("axios");
const cheerio = require("cheerio");

const Story = require("../Models/Story");

const scrapeNews = async () => {
  try {
    const response = await axios.get("https://news.ycombinator.com/");
    const $ = cheerio.load(response.data);
    await Story.deleteMany({});
    let stories = [];
    $(".athing").slice(0, 10).each((index, element) => {

      const title = $(element)
        .find(".titleline a")
        .text();

      const url = $(element)
        .find(".titleline a")
        .attr("href");

   
      const subtext = $(element).next();

      const pointsText = subtext.find(".score").text();

      const points = parseInt(pointsText) || 0;

      const author = subtext.find(".hnuser").text();

      const time = subtext.find(".age").text();

      stories.push({
        title,
        url,
        points,
        author,
        time
      });

    });


    await Story.insertMany(stories);

    console.log("Top 10 stories scraped successfully");

  } catch (error) {

    console.log(error);

  }

};

module.exports = scrapeNews;