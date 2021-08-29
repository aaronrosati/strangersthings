import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {default as FetchSinglePost} from './FetchSinglePost.js';
import {default as MessageForm} from './MessageForm.js'

const FetchPosts = (props) => {
    const {BASE_URL, posts, fetchPosts, token, user} = props;

    const handleDelete = async (postId) => {
        await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        }).then(response => response.json())
        .then(result => {
        })
        .catch(console.error);

        await fetchPosts();
    }

    useEffect(() => {
        fetchPosts();
    }, [token])

    return <>
        {
            posts ? 
            posts.map((post, index) => 
                <FetchSinglePost key={post._id} post={post} token={token}>
                    {token ? <Link to={`/posts/${post._id}`}>Post Details</Link> : null}
                    {
                        user.username === post.author.username ? <button onClick={(event) => 
                            handleDelete(post._id)}>Delete Post</button> : null
                    }
                    {token && user.username != post.author.username ? <MessageForm post={post}
                    token={token} BASE_URL={BASE_URL}/> : null}
                    
                </FetchSinglePost>) : null
        }
    </>
}

//used in App by index.js
export default FetchPosts;
