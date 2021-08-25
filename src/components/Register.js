import React, {useState} from 'react'


const Register = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => {
        
    }

    return <div>
            <form>
                <div>
                    <label>Enter Username: </label>
                    <input type='text' name='username' value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Enter Password: </label>
                    <input type='password' name='password' value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
                </div>
            </form>
          </div>
}

export default Register;