import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {default as FetchSinglePost} from './FetchSinglePost.js';

const FetchPosts = (props) => {
    const {setPosts, BASE_URL, posts, fetchPosts, token} = props;

    useEffect(() => {
        fetchPosts();
    }, [token])

    return <>
        <h3>Stranger's Things</h3>
        {
            posts ? 
            posts.map((post, index) => 
                <FetchSinglePost key={post._id} post={post} token={token}>
                    {token ? <Link to={`/posts/${post._id}`}>Post Details</Link> : null}
                </FetchSinglePost>) : null
        }
    </>
}

//used in App by index.js
export default FetchPosts;
