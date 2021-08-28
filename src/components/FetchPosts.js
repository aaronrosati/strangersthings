import {useEffect, useState} from "react";
import React from 'react';
import {default as FetchSinglePost} from './FetchSinglePost.js';

const FetchPosts = (props) => {
    const {setPosts, BASE_URL, posts, fetchPosts, token} = props;

    useEffect(() => {
        fetchPosts();
    }, [token])

    return <>
        <h3>Stranger's Things</h3>
        {
            posts ? posts.map((post, index) => <FetchSinglePost key={post._id} post={post}/>) : null
        }
    </>
}


export default FetchPosts;
