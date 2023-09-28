import React, { useState, useEffect } from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, this is from npm.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend API when the component mounts
    try {
      fetch("/blogs")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setBlogs(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }, []);
  return (
    <div className="card-container">
      <Carousel responsive={responsive}>
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-post">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>
             <button>More...</button>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
