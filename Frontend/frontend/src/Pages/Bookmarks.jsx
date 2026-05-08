import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Bookmarks() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://newsproject-knve.onrender.com/api/stories/bookmarks",
       
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

  return (

    <div className="container">

      <h1 className="heading">
        My Bookmarks
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

          </div>

        ))}

      </div>

    </div>

  );

}

export default Bookmarks;