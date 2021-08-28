import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


import {
    FetchPosts,
    Register,
    Login,
    AddPost
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
                {token ? <Link to='/logout'>Logout </Link> : null }
                <Link to='/register'>register</Link>
                <Link to='/login'>Login</Link>
            </div>
        }
        <Route exact path="/posts">
            <AddPost token={token} fetchPosts={fetchPosts}/>
            <FetchPosts token={token} BASE_URL={BASE_URL} setPosts={setPosts} posts={posts} fetchPosts={fetchPosts}/>
        </Route>
        <Route exact path="/register">
            <Register setToken={setToken} BASE_URL={BASE_URL}/>
        </Route>
        <Route exact path ="/login">
            <Login setToken={setToken} setUser={setUser} BASE_URL={BASE_URL}/>
        </Route>
    </div>
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
)