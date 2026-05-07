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
            Authorization: `Bearer ${token}`
          }
        }
      );

      setStories(response.data);

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

        {stories.map((story, index) => (

          <div className="card" key={index}>

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

          </div>

        ))}

      </div>

    </div>

  );

}

export default Stories;