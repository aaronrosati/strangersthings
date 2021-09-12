import React, {useState} from 'react';

const FilterPosts = (props) => {
    const {setPosts, posts, fetchPosts} = props;
    const [searchTitle, setSearchTitle] = useState('');
    const [searchDescription, setSearchDescription] = useState('');
    let filteredPosts =[];

    const filterPostsTitle = async () => {
        filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTitle.toLowerCase()));
        setPosts(filteredPosts);
    }

    const filterPostsDescription = async () => {
        filteredPosts = posts.filter(post => post.description.toLowerCase().includes(searchDescription.toLowerCase()));
        setPosts(filteredPosts);
    }

    return <div>
            <form onChange={filterPostsTitle} onSubmit={async(event) => {
                event.preventDefault();
                await fetchPosts();
                setSearchTitle('');
            }}>
                <label>Search By Title </label>
                <input type='text' name='search-term' placeholder='search term' value={searchTitle}
                onChange={(event) => setSearchTitle(event.target.value)}></input>
                <button type='submit'>Search</button>
            </form>
            <form onChange={filterPostsDescription} onSubmit={async(event) => {
                event.preventDefault();
                await fetchPosts();
                setSearchDescription('');
            }}>
                <label>Search By Description </label>
                <input type='text' name='search-term' placeholder='search term' value={searchDescription}
                onChange={(event) => setSearchDescription(event.target.value)}></input>
                <button type='submit'>Search</button>
            </form>
        </div>
}

export default FilterPosts;
