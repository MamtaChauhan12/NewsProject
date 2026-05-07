import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/stories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStories(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const bookmarkStory = async (storyId) => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `http://localhost:5000/api/stories/${storyId}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      fetchStories();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container">

      <h1 className="heading">
        Hacker News Stories
      </h1>

      <div className="card-container">

        {stories.map((story) => (

          <div className="card" key={story._id}>

            <h2>{story.title}</h2>

            <p>
              <strong>Author:</strong> {story.author}
            </p>

            <p>
              <strong>Points:</strong> {story.points}
            </p>

            <a
              href={story.url}
              target="_blank"
              rel="noreferrer"
            >
              Read Full Story
            </a>

            <br />
            <br />

            <button
              className="bookmark-btn"
              onClick={() => bookmarkStory(story._id)}
            >
              {story.isBookmarked
                ? "Remove Bookmark"
                : "Bookmark"}
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Stories;