import React, {useState, useContext, useEffect} from 'react'
import {StateContext} from '../Context';
import { useResource } from 'react-request-hook';

// import './auth.css'
// import 'font-awesome/css/font-awesome.css'


export default function Login() {

    const [ loginFailed, setLoginFailed ] = useState(false);

    const {dispatch} = useContext(StateContext);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                setLoginFailed(false)
                dispatch({ type: 'LOGIN', username: user.data[0].username })
            } else {
                setLoginFailed(true)
            }
        } 
    }, [user])

    return (
        <div>
            <br/>
            <center><h3>Login</h3></center>
            <form onSubmit={evt => { evt.preventDefault(); login(formData.username, formData.password) }}>
                <label htmlFor="username-input">UserName: </label>
                <input type="text" name="username-input" value={formData.username} onChange={evt => {setFormData({...formData, username: evt.target.value})}} className="form-control" placeholder="Username"></input>
                <br/>
                <label htmlFor="password-input">Password: </label>
                <input type="password" name="password-input" value={formData.password} onChange={evt => {setFormData({...formData, password: evt.target.value})}} className="form-control" placeholder="Password"></input>
                <br/>
                <button className="btn btn-md btn-primary btn-block" type="submit">Login</button>
            </form>
            {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
       </div>
    );
    
}