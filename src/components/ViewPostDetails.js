import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {default as FetchSinglePost} from './FetchSinglePost.js';
import {default as MessageForm} from './MessageForm.js'


const ViewPostDetails = (props) => {
    const {posts, token, setPosts, BASE_URL, user} = props;


    const fetchPostsWithToken = async (tokenParam, BASE_URL_PARAM) => {
        await fetch(`${BASE_URL_PARAM}/posts`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${tokenParam}`
            }
          }).then(response => response.json())
            .then(result => {
              setPosts(result.data.posts);
            })
            .catch(console.error);
    }

    useEffect(() => {
        fetchPostsWithToken(token, BASE_URL);
    }, [])

    const {postId} = useParams();
    const post = posts.find(post => post._id === postId);

    return <div className="single-post">
            <FetchSinglePost post={post}>
                {
                    token ? post.messages.map((message, index) => {
                        return <div key={index} className='message-display'>
                            <div> </div>
                            <div>{message.content}</div>
                            <div>Sent by {message.fromUser.username} At {message.createdAt}</div>
                        </div>
                    }) : null
                }
                {token && user.username != post.author.username ? <MessageForm post={post}
                    token={token} BASE_URL={BASE_URL}/> : null}
            </FetchSinglePost>
        </div>
}

export default ViewPostDetails;