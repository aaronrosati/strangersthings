import React, {useState} from 'react';

const MessageForm = (props) => {
    const [content, setContent] = useState('');
    const {token, BASE_URL, post} = props;

    return <div className="message-form">
        <form onSubmit={async (event) => {
            event.preventDefault();
            await fetch(`${BASE_URL}/posts/${post._id}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    message: {
                        content
                    }
                })
            }).then(response => response.json())
              .then(result => {
                  setContent('');
                  alert("Message Sent!");
              })
              .catch(console.error)

        }}>
            <label>Send {post.author.username} a message: </label>
            <input type='text' value={content} name='message' 
            onChange={(event) => setContent(event.target.value)}></input>
            <button type='submit'>Post Message</button>
        </form>
    </div>
}

//used by FetchPosts.js and ViewPostDetails.js
export default MessageForm;