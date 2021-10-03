import React, {useState} from 'react'
// import './auth.css'
// import 'font-awesome/css/font-awesome.css'

export default function Login({setUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(evt) { setUsername(evt.target.value) }
    function handlePassword(evt) { setPassword(evt.target.value) }

    return (
        <form onSubmit={evt => { evt.preventDefault(); setUser(username) }}>
            <label htmlFor="username-input">UserName: </label>
            <input type="text" name="username-input" onChange={handleUsername} class="form-control" placeholder="Username"></input>
            <br/>
            <label htmlFor="password-input">Password: </label>
            <input type="password" name="password-input" onChange={handlePassword} class="form-control" placeholder="Password"></input>
            <br/>
            <button class="btn btn-md btn-primary btn-block" type="submit">Login</button>
       </form>
    );
    
}

