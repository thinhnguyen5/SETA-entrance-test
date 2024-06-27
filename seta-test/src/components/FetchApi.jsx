import React, { useState, useEffect } from "react";
import Axios from "axios";

const FetchApi = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/posts";

  //Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  //Post Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null); // Clear any previous errors

    try {
      const response = await Axios.post(url, {
        userId: e.target[0].value,
        title: e.target[1].value,
        body: e.target[2].value,
      });
      setUser((prev) => [...prev, response.data]);
      console.log("Post created successfully:", response.data);
    } catch (err) {
      console.error("Error creating post:", err);
      setError(err.message || "An error occurred while creating the post.");
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <form onSubmit={handleSubmit}>
        <input id="userId" placeholder="userId" type="number" required />
        <input id="title" placeholder="title" type="text" required />
        <input id="body" placeholder="body" type="text" required />
        <button>Post</button>
      </form>

      <ul>
        {user.map((list, index) => (
          <li key={index}>
            <p>
              userId: {list.userId} <br />
              Id: {list.id} <br />
              Title: {list.title} <br />
              Body: {list.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;
