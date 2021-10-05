import React from 'react';
import Login from '../auth/Login'
import Logout from '../auth/Logout'
import Registration from '../auth/Registration'

export default function Navbar({user, dispatchUser}){

    if (user) {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Logout user={user} dispatchUser={dispatchUser}/>
            </nav>
        );

    } else {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">To Do</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Login dispatchUser={dispatchUser} />
                    </li>
                    <li class="nav-item active">
                        <Registration dispatchUser={dispatchUser} />
                    </li>
                </ul>
            </nav>
        );
    }
}