import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


import {
    FetchPosts,
    Register
} from './components';

const BASE_URL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');

    return <div className="app">
        <div id="navbar">
            <Link to='/posts'>Posts </Link>
            <Link to='/profile'>Profile </Link>
            <Link to='/logout'>Logout </Link>
            <Link to='/register'>register</Link>
        </div>
        <Route exact path="/posts">
            <FetchPosts BASE_URL={BASE_URL} setPosts={setPosts} posts={posts}/>
        </Route>
        <Route exact path="/register">
            <Register token={token}/>
        </Route>
    </div>
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
)