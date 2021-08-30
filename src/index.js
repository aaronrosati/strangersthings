import React, {useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route, useHistory} from 'react-router-dom';

import {
    FetchPosts,
    Register,
    Login,
    AddPost,
    ViewPostDetails,
    Profile,
    FilterPosts
} from './components';

const BASE_URL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const history = useHistory('');
    
    const fetchPosts = async () => {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        setPosts(data.data.posts);
    }

    const props = {
        posts,
        setPosts,
        token,
        setToken,
        user, 
        setUser,
        BASE_URL,
        fetchPosts
    }


    return <div className="app">
        {
            <div id="navbar">
                <Link to='/posts'>Posts </Link>
                {token ? <Link to='/profile'>Profile </Link> : null}
                {token ? <button onClick={() => {
                    alert("You have successfully logged out")
                    setToken('')
                    history.push('/posts');
                }}>Logout</button> : null }
                {!token ? <Link to='/register'>register</Link> : null}
                {!token ? <Link to='/login'>Login</Link> : null}
            </div>
        }
        <Route exact path="/posts">
            {token ? <button><Link to='/add-post-form'>Create New Post</Link></button> : null}
            <FilterPosts/>
            <FetchPosts user={user} token={token} BASE_URL={BASE_URL} posts={posts} fetchPosts={fetchPosts}/>
        </Route>
        <Route exact path="/register">
            <Register setToken={setToken} BASE_URL={BASE_URL}/>
        </Route>
        <Route exact path ="/login">
            <Login setToken={setToken} setUser={setUser} BASE_URL={BASE_URL}/>
        </Route>
        <Route exact path="/posts/:postId">
            <ViewPostDetails user={user} posts={posts} token={token} setPosts={setPosts} BASE_URL={BASE_URL}/>
        </Route>
        <Route exact path="/profile">
            <Profile user={user}/>
        </Route>
        <Route exact path="/add-post-form">
            <AddPost token={token} fetchPosts={fetchPosts} BASE_URL={BASE_URL}/>
        </Route>
    </div>
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
)
