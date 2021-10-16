import React from 'react';
import Logout from '../auth/Logout'
import 'bootstrap/dist/css/bootstrap.css'

export default function Navbar({user, dispatchUser}){
    let userCodeInNavbar;
    if(user) {
        userCodeInNavbar = 
            <Logout user={user} dispatchUser={dispatchUser}/>
    } else {
        userCodeInNavbar = <div></div>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1" href="">To Do</a>
                <div className="d-flex">
                    { userCodeInNavbar }
                </div>
            </div>
        </nav>
    )
}