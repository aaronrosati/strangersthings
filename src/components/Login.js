import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {BASE_URL, setToken, setUser} = props;
    const history = useHistory();
    let localToken = '';

    return <div>
        <form onSubmit={async (event) => {
            event.preventDefault();
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username,
                    password
                  }
                })
              }).then(response => response.json())
                .then(result => {
                  if (result.data) {
                      setToken(result.data.token);
                      localToken = result.data.token;
                      setUsername('')
                      setPassword('')
                      history.push('/posts')

                  }else {
                      alert('Invalid username or password, If you don\'t have an account, use the register link to make one');
                      setUsername('')
                      setPassword('')
                  }
                })
                .catch(console.error);

            const userResponse = await fetch(`${BASE_URL}/users/me`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localToken}`
              },
            }).then(response => response.json())
              .then(result => {
                setUser(result.data);
              })
              .catch(console.error);


        }}>
            <div>
                <label>Enter Username:</label>
                <input type='text' name='password' value={username}
                onChange={(event) => setUsername(event.target.value)}></input>
            </div>
            <div>
                <label>Enter Password:</label>
                <input type='password' name='password' value={password}
                onChange={(event) => setPassword(event.target.value) }></input>
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
}

//used in App by index.js
export default Login;
