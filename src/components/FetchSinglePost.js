import React from 'react';

const FetchSinglePost = (props) => {
    const {post, token, children} = props;

    //try catch statement is here to prevent user from seeing an error screen if they
    //refresh their browser while looking at post details.
    try {
        return <div key={post._id} className='post-body'>
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
    catch {
        return <div>An authentication error occurred, please log back in to view this post.</div>
    }

}

//used by FetchPosts.js and ViewPostDetails.js
export default FetchSinglePost;