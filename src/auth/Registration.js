import React, {useState, useContext} from 'react';
import { StateContext } from '../Context';

export default function Registration() {
    const {dispatch} = useContext(StateContext);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        repeatPassword: ''
    });
    

    return (
        <div>
            <br/>
            <center><h3>Register</h3></center>
            <form onSubmit={evt => { evt.preventDefault(); dispatch({type: 'REGISTRATION', username: formData.username}); }}>
                <label htmlFor="name-input">Name</label>
                <input type="text" name="name-input" value={formData.name} onChange={evt => setFormData({...formData, name: evt.target.value})} className="form-control" placeholder="Name"></input>
                <br/>
                <label htmlFor="username-input">UserName</label>
                <input type="text" name="username-input" value={formData.username} onChange={evt => setFormData({...formData, username: evt.target.value})} className="form-control" placeholder="Username"></input>
                <br/>
                <label htmlFor="password-input">Password</label>
                <input type="password" name="password-input" value={formData.password} onChange={evt => setFormData({...formData, password: evt.target.value})} className="form-control" placeholder="Password"></input>
                <br/>
                <label htmlFor="repeat-password">Repeat Password</label>
                <input type="password" name="repeat-password" value={formData.repeatPassword} onChange={evt => setFormData({...formData, repeatPassword: evt.target.value})} className="form-control" placeholder="Password"></input>
                <br/>
                <button className="btn btn-md btn-primary btn-block" disabled={formData.password !== formData.repeatPassword || formData.password.length === 0 } type="submit">Login</button>
            </form>
       </div>
    );
}