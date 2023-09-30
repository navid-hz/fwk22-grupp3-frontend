import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const postStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const bodyStyle = {
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
     
      {posts.map((post) => (
        <div key={post.id} style={postStyle}>
          <Link to={`/blog/${post.id}`}>
            <h3 style={titleStyle}>{post.title}</h3>
          </Link>
          <p style={bodyStyle}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
