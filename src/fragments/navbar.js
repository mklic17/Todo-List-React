import React from 'react';

export default function Navbar(user){

    if (user) {
        // There is probably a better way to do this, but for now I will hardcode
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">To Do</span>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        Logout
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">To Do</span>

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Login</a> 
                        {/* Redirect to login form */}
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Register</a>   
                        {/* Redirect to Register */}
                    </li>
                </ul>
            </nav>
        );
    }


}