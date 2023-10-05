import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // Get the blogId
  const { id } = useParams();

  const fetchAllBlogs = async () => {
    try {
      const response = await fetch(`http://localhost:5000/blogs/${id}`, {
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


  useEffect(() => {
    fetchAllBlogs();
  }, []);

  

  function formatTimestamp(timestamp) {
    const dateObject = new Date(timestamp);

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Adding 1 because months are zero-indexed
    const day = dateObject.getDate();

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    // Pad single-digit values with leading zeros
    const pad = (value) => (value < 10 ? `0${value}` : value);

    return `${year}-${pad(month)}-${pad(day)} ${pad(hours)}:${pad(
      minutes
    )}:${pad(seconds)}`;
  }

  const timestamp = blogs.createdAt;
  const formattedDate = formatTimestamp(timestamp);

  return (
    <div className="container-blog">
      <p className="date">{formattedDate}</p>
      <h1 className="title-blog-id">{blogs.title}</h1>
      <p>{blogs.content}</p>
    </div>
  );
};

export default Blog;
