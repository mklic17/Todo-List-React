import React, {useState} from 'react'


export default function Registration( {dispatchUser} ) {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        repeatPassword: ''
    });
    

    return (
        <form onSubmit={evt => { evt.preventDefault(); dispatchUser({type: 'REGISTRATION', username: formData.username}); }}>
            <label htmlFor="name-input">Name</label>
            <input type="text" name="name-input" value={formData.name} onChange={evt => setFormData({...formData, name: evt.target.value})} class="form-control" placeholder="Name"></input>
            <br/>
            <label htmlFor="username-input">UserName</label>
            <input type="text" name="username-input" value={formData.username} onChange={evt => setFormData({...formData, username: evt.target.value})} class="form-control" placeholder="Username"></input>
            <br/>
            <label htmlFor="password-input">Password</label>
            <input type="password" name="password-input" value={formData.password} onChange={evt => setFormData({...formData, password: evt.target.value})} class="form-control" placeholder="Password"></input>
            <br/>
            <label htmlFor="repeat-password">Repeat Password</label>
            <input type="password" name="repeat-password" value={formData.repeatPassword} onChange={evt => setFormData({...formData, repeatPassword: evt.target.value})} class="form-control" placeholder="Password"></input>
            <br/>
            <button class="btn btn-md btn-primary btn-block" disabled={formData.password !== formData.repeatPassword || formData.password.length === 0 } type="submit">Login</button>
       </form>
    );
}