import React, {useState} from 'react'


const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {BASE_URL, setToken, setUser} = props;


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
                  console.log(result);
                  if (result.data) {
                      setToken(result.data.token);
                      setUsername('')
                      setPassword('')
                  }else {
                      alert('Invalid username or password, If you don\'t have an account, use the register link to make one');
                      setUsername('')
                      setPassword('')
                  }
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


export default Login;
