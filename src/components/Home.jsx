import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(
        `http://192.168.43.114:5000/api/blogs/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  const postStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const bodyStyle = {
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {posts.map((post) => (
        <div key={post.id} style={postStyle}>
          <Link to={`/blog/${post.id}`}>
            <h3 style={titleStyle}>{post.title}</h3>
          </Link>
          <p style={bodyStyle}>{post.body}</p>
          <button style={buttonStyle} onPress={() => deleteBlog(post._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
