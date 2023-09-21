import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BlogPost = () => {
    const { id } = useParams()
    const [blogPost, setBlogPost] = useState(null)

    useEffect(() => {

        fetch(`/blogs/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setBlogPost(data)
        })
        .catch((error)=> {
            console.error('Error fetching blog post', error)
        })
    }, [id])
    
    return (
        <div>
            {BlogPost ? (
                <div>
                    <h2>{blogPost.title}</h2>
                    <p>{blogPost.content}</p>
                </div>
            ) : (
                <p>Loading..</p>
            )}
        </div>
    )
}

export default BlogPost
