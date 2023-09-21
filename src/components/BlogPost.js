import React from 'react'
import { useParams } from 'react-router-dom'

const BlogPost = ({title, content}) => {
    const { id } = useParams()
    
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default BlogPost
