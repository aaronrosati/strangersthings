import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
/*QUESTIONS
- why useEffect in FetchPosts work? is that ok to do? should i put it into index.js?
- Ask about the fetch code that the API provides, is what i'm doing with .then ok or will
i get points off for it.
*/

import {
    FetchPosts,
    Register,
    Login,
    AddPost,
    ViewPostDetails
} from './components';

const BASE_URL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});

    const fetchPosts = async () => {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        setPosts(data.data.posts);
    }

    return <div className="app">
        {
            <div id="navbar">
                <Link to='/posts'>Posts </Link>
                {token ? <Link to='/profile'>Profile </Link> : null}
                {token ? <button onClick={() => setToken('')}>Logout</button> : null }
                {!token ? <Link to='/register'>register</Link> : null}
                {!token ? <Link to='/login'>Login</Link> : null}
            </div>
        }
        <Route exact path="/posts">
            {token ? <AddPost token={token} fetchPosts={fetchPosts} BASE_URL={BASE_URL}/> : null}
            <FetchPosts token={token} BASE_URL={BASE_URL} setPosts={setPosts} posts={posts} fetchPosts={fetchPosts}/>
        </Route>
        <Route exact path="/register">
            <Register setToken={setToken} BASE_URL={BASE_URL}/>
        </Route>
        <Route exact path ="/login">
            <Login setToken={setToken} setUser={setUser} BASE_URL={BASE_URL}/>
        </Route>
        <Route exact path="/posts/:postId">
            <ViewPostDetails posts={posts} token={token}/>
        </Route>
    </div>
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
)