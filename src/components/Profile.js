import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import {default as FetchSinglePost} from './FetchSinglePost.js';

const Profile = (props) => {
    const history = useHistory();
    const {user, token} = props;
    let sentMessages = [];
    let receivedMessages = [];
    let userPosts = [];
    try {
        sentMessages = user.messages.filter(message => message.fromUser.username === user.username)
        receivedMessages = user.messages.filter(message => message.fromUser.username != user.username)
        userPosts = user.posts;
    } catch (error) {
        alert("There was an authentication error, please log in again.");
        history.push("/login");
    }
    return <div className='profile-message-display'>
            <h2>Sent Messages</h2>
             <div className="sent-messages">
                {sentMessages.map((message, index) => {
                    return <div key={index}>
                            <h5>You commented on {message.post.title}</h5>
                            {message.content}
                            
                        </div>
                })}
            </div>
            <h2>Received Messages</h2>
            <div className="received-messages">
                {receivedMessages.map((message, index) => {
                    return <div key={index}>
                        <h5>{message.fromUser.username} commented on {message.post.title}</h5>
                        {message.content}
                        </div>
                })}
            </div>
            <h2>Your Posts</h2>
            <div className="user-posts">
                {
                   user.posts ? user.posts.map(post => {
                        return token && user.posts ? <FetchSinglePost key={post._id} post={post} token={token}>
                            {post.active ? <Link to={`/posts/${post._id}`}>Post Details</Link> : null}
                            {
                                user.username === post.author.username ? <button onClick={(event) => 
                                    handleDelete(post._id)}></button> : null
                            }
                            {!post.active ? <div><em>Deleted Post, Details Unavailable</em></div> : null}
                        </FetchSinglePost> : null
                    }) : null
                } 
            </div>
        </div>
}

export default Profile
