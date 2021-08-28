import React from 'react';
import {useParams} from 'react-router';


const ViewPostDetails = (props) => {
    const {posts, token} = props;
    const {postId} = useParams();
    return <div>
        Post ID: {postId}
        </div>
}

//used by App in index.js
export default ViewPostDetails;