import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import {default as FetchSinglePost} from './FetchSinglePost.js';


const ViewPostDetails = (props) => {
    const {posts, token, setPosts, BASE_URL} = props;

    //we have to refetch posts with a token if we want to be able to see the attached
    //messages
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
    console.log(post);

    return <div className="single-post">
            <FetchSinglePost post={post}>

            </FetchSinglePost>
        </div>
}

//used by App in index.js
export default ViewPostDetails;