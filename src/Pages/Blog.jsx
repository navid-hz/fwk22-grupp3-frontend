import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState();

  // Get the blogId
  const { id } = useParams();

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserBlogs();
  }, []);

  console.log(blog);

  return (
    <div className="container-blog">
      <p>May 20 - Written By USer</p>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default Blog;
