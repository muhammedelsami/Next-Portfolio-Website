import React from 'react';

/**
 *  BlogPage component
 *  Created by Muhammed Elşami on 01.12.2023
 */ 

const BlogPage = () => {
    const posts = [
        { id: 1, title: 'Blog Post 1', content: 'This is the content for blog post 1.' },
        { id: 2, title: 'Blog Post 2', content: 'This is the content for blog post 2.' },
        // Add more posts as needed
    ];

    return (
        <div>
            <h1>Blog</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogPage;