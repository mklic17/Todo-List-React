import React from 'react'
import './auth.css'
import 'font-awesome/css/font-awesome.css'

export default function Login() {
    return (
        <div class="justify-content-center center-screen">
            <form onSubmit={evt => evt.preventDefault()}>
                <h4 id="loginHere">Login Here</h4>
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-text"> <i class="fa fa-user"></i></span>
                        <input name="username" class="form-control" placeholder="Username" type="email"></input>
                    </div>
                </div>
                <br/>
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-text"><i class="fa fa-lock"></i></span>
                        <input name="password" class="form-control" placeholder="Password" type="password"></input>
                    </div>
                </div>
                <br/>
                <center><button class="btn btn-md btn-primary btn-block" type="submit">Login</button></center>
            </form>
        </div>
    )
    
}
