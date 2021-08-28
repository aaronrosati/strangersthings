import React from 'react';

const FetchSinglePost = (props) => {
    const {post, token, children} = props;

    return <div key={post._id}>
        <h2>{post.title}</h2>
        <div>{post.description}</div>
        <div>{post.price}</div>
        <div>{post.location}</div>
        <div>Posted On: {post.createdAt}</div>
        <div>Posted By: {post.author.username}</div>
        {
            children
        }
    </div>

}

//used by FetchPosts.js
export default FetchSinglePost;