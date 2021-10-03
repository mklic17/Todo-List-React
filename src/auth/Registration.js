import React, {useState} from 'react'


export default function Registration( {setUser} ) {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function handleUsername(evt) { setUsername(evt.target.value) }
    function handleName(evt) { setName(evt.target.value) } 
    function handlePassword(evt) { setPassword(evt.target.value) }
    function handleRepeatPassword(evt) { setRepeatPassword(evt.target.value) } 


    return (
        <form onSubmit={evt => { evt.preventDefault(); setUser(username) }}>
            <label htmlFor="name-input">Name</label>
            <input type="text" name="name-input" onChange={handleName} class="form-control" placeholder="Name"></input>
            <br/>
            <label htmlFor="username-input">UserName</label>
            <input type="text" name="username-input" onChange={handleUsername} class="form-control" placeholder="Username"></input>
            <br/>
            <label htmlFor="password-input">Password</label>
            <input type="password" name="password-input" onChange={handlePassword} class="form-control" placeholder="Password"></input>
            <br/>
            <label htmlFor="repeat-password">Repeat Password</label>
            <input type="password" name="repeat-password" onChange={handleRepeatPassword} class="form-control" placeholder="Password"></input>
            <br/>
            <button class="btn btn-md btn-primary btn-block" type="submit">Login</button>
       </form>
    );
}