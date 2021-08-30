import React, { useState, useEffect} from 'react';
import FetchSinglePost from './FetchSinglePost';


function FilterPosts({posts, setPosts}) {
    const [searchTerm, setSearchTerm] = useState('');
    const postMatches = (post, text) => {
        let check = post.includes(text);
        return check;
    }
    const handleSubmit = () => {
        const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchTerm));
        setPosts(filteredPosts);
        if (!searchTerm.length) {
            fetchPosts();
        }
    }
    const fetchPosts = async () => {
        const response = await callApi({
            url: '/posts',
});
const allPosts = response.data.posts;
        if(allPosts) setPosts(allPosts);
    }
    
return <>
<form onSubmit={(ev) => {
    ev.preventDefault()
    handleSubmit()
}}>
    <input type="text" placeholder="search..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
    <button type="submit">Search</button>
</form>

</>
}
export default FilterPosts;