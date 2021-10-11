import React, {useState} from 'react'
// import './auth.css'
// import 'font-awesome/css/font-awesome.css'


export default function Login({dispatchUser}) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    return (
        <div>
            <br/>
            <center><h3>Login</h3></center>
            <form onSubmit={evt => { evt.preventDefault(); dispatchUser({type: 'LOGIN', username: formData.username}) }}>
                <label htmlFor="username-input">UserName: </label>
                <input type="text" name="username-input" value={formData.username} onChange={evt => {setFormData({...formData, username: evt.target.value})}} className="form-control" placeholder="Username"></input>
                <br/>
                <label htmlFor="password-input">Password: </label>
                <input type="password" name="password-input" value={formData.password} onChange={evt => {setFormData({...formData, password: evt.target.value})}} className="form-control" placeholder="Password"></input>
                <br/>
                <button className="btn btn-md btn-primary btn-block" type="submit">Login</button>
            </form>
       </div>
    );
    
}