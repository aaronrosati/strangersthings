import React from 'react';

const FetchSinglePost = (props) => {
    const {post} = props;

    return <div key={post._id}>
        <h2>{post.title}</h2>
        <div>{post.description}</div>
    </div>

}

export default FetchSinglePost;