import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const FetchApi = () => {
  const [user, setUser] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  // Create a new post
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      userId: e.target[0].value,
      title: e.target[1].value,
      body: e.target[2].value,
    }).then((res) => {
      setUser((previous) => {
        return [...previous, res.data];
      });
      console.log(res.data);
    });
  };

  // Fetch the data the the API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="userId" placeholder="userId" type="number"></input>
        <input id="title" placeholder="title" type="text"></input>
        <input id="body" placeholder="body" type="text"></input>
        <button>Post</button>
      </form>

      <ul>
        {user.map((list, index) => (
          <li key={index}>
            userId:{list.userId} <br />
            Id:{list.id} <br />
            Title:{list.title} <br />
            Body:{list.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;
