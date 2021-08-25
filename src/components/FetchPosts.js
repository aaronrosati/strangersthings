import {useEffect, useState} from "react";
import React from 'react';


const FetchPosts = (props) => {
    const {setPosts, BASE_URL, posts} = props;

    const fetchPosts = async () => {
        const response = await fetch(`${BASE_URL}/posts`);
        //console.log("response: ", response)
        const data = await response.json();
        //console.log("data: ", data);
        setPosts(data.data.posts);
    }

    useEffect(() => {
        fetchPosts();
        //console.log("posts inside useEffect: ", posts);
    }, [])

    return <>
        <h3>Stranger's Things</h3>
        {
            posts ? posts.map((post, index) => <>
                 <div>
                     <h2>{post.title}</h2>
                     <div>{post.description}</div>
                     </div>
            </>) : null
        }
    </>
}


export default FetchPosts;