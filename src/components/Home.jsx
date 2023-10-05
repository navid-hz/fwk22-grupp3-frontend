import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/blogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  });

  const deleteBlog = async (id) => {
    try {
      await fetch(`http://localhost:5000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
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
      {blogs.map((blog) => (
        <div key={blog._id} style={postStyle}>
          <Link to={`/blog/${blog._id}`}>
            <h3 style={titleStyle}>{blog.title}</h3>
          </Link>
          <p style={bodyStyle}>{blog.content}</p>
          <button style={buttonStyle} onClick={() => deleteBlog(blog._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
