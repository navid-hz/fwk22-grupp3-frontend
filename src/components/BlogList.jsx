import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function BlogList() {
  const [post, setPosts] = useState([]);
  const backendURL = 'http://localhost:5000/blogs';

  useEffect(() => {
    fetch(backendURL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {post.map((blog) => (
          <li key={blog._id}>
            <Link to={`/blog/${blog._id}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
