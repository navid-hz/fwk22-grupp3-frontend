import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

function BlogList() {
  const [post, setPosts] = useState([]);
  const db = firebase/firestore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = [];
        const querySnapshot = await db.collection('blogposts').get();
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchData();
  }, [db]);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
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