import React from 'react';
import AuthBar from '../auth/AuthBar'
import 'bootstrap/dist/css/bootstrap.css'

export default function Navbar(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1" href="">To Do</a>
                <AuthBar/>
            </div>
        </nav>
    )
}