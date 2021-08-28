import React, {useState} from 'react'


const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {BASE_URL, setToken} = props;

    return <div>
            <form onSubmit={async (event) => {
                event.preventDefault();

                const response = await fetch(`${BASE_URL}/users/register`, {
                    method: 'POST',
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
                        //setToken(result.data.token);
                        setUsername('')
                        setPassword('')
                      } else {
                          setUsername('')
                          setPassword('')
                          alert('That username already exists, please try another one.')
                      }

                  })
                  .catch(console.error);
            }}>
                <div>
                    <label>Enter Username: </label>
                    <input type='text' placeholder='username' value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Enter Password: </label>
                    <input type='password' placeholder='password' value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button type='submit'>Register!</button>
            </form>
          </div>
}

//used in App by index.js
export default Register;
