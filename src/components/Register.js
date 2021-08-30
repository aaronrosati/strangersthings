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
                        setUsername('')
                        setPassword('')
                      } else {
                          setUsername('')
                          setPassword('')
                          alert('Username already exists, please try again')
                      }

                  })
                  .catch(console.error);
            }}>
                <div>
                    <label>Username: </label>
                    <input type='text' placeholder='username' value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' placeholder='password' value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button type='submit'>Register!</button>
            </form>
          </div>
}

export default Register;

