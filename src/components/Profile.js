import React from 'react';
import {useHistory} from 'react-router-dom';


const Profile = (props) => {
    const history = useHistory();
    const {user} = props;
    let sentMessages = [];
    let receivedMessages = [];
    let userPosts = [];
    console.log(user);
    try {
        sentMessages = user.messages.filter(message => message.fromUser.username === user.username)
        receivedMessages = user.messages.filter(message => message.fromUser.username != user.username)
        userPosts = user.posts;
    } catch (error) {
        alert("Authentication error, please log in again.");
        history.push("/login");
    }
    return <div className='profile-message-display'>
            <h2>Sent Messages</h2>
             <div className="sent-messages">
                {sentMessages.map((message, index) => {
                    return <div key={index}>{message.content}</div>
                })}
            </div>
            <h2>Received Messages</h2>
            <div className="received-messages">
                {receivedMessages.map((message, index) => {
                    return <div key={index}>{message.content}</div>
                })}
            </div>
            <h2>Your Posts</h2>
            <div className="user-posts">
                {userPosts.map((message, index) => {
                    return <div key={index}>{message.content}</div>
                })}
            </div>
        </div>
}


export default Profile
