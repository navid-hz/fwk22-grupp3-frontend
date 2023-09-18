import React from 'react'

const BlogList = () => {
    const blogPosts = [
        { id: 1, title: "You Won't Believe What Emma Roberts Done Now", content: "She wore the same braid three days in a row. Seriously. That's what this article is about."},
        { id: 2, title: "You Won't Believe How Simple This Celebrity Jewelry Hack Is", content: "Tie a bandana around your neck. That's it. That's the 'hack'"},
        //More Blog posts
    ]

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogList