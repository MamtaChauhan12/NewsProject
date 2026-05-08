import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      fetchStories();
    }

  }, []);

  const fetchStories = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://newsproject-knve.onrender.com/api/stories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStories(response.data);

    } catch (error) {

      console.log(error.response);

    }

  };

  const bookmarkStory = async (storyId) => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `http://newsproject-knve.onrender.com/api/stories/${storyId}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      setStories((prevStories) =>
        prevStories.map((story) =>
          story._id === storyId
            ? {
                ...story,
                isBookmarked:
                  !story.isBookmarked,
              }
            : story
        )
      );

    } catch (error) {

      console.log(error.response);

      alert(
        error.response?.data?.message ||
        "Bookmark Failed"
      );

    }

  };

  return (

    <div className="container">

      <h1 className="heading">
        Hacker News Stories
      </h1>

      <div className="card-container">

        {stories.map((story) => (

          <div
            className="card"
            key={story._id}
          >

            <h2>{story.title}</h2>

            <p>
              <strong>Author:</strong>
              {" "}
              {story.author}
            </p>

            <p>
              <strong>Points:</strong>
              {" "}
              {story.points}
            </p>

            <p>
              <strong>Posted Time:</strong>
              {" "}
              {story.time}
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
              onClick={() =>
                bookmarkStory(story._id)
              }
              style={{
                backgroundColor:
                  story.isBookmarked
                    ? "red"
                    : "green",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
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