import React from 'react';
import AuthBar from '../auth/AuthBar'
import { Link } from 'react-navi';
import 'bootstrap/dist/css/bootstrap.css'

export default function Navbar(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/"><h2 className="navbar-brand mb-0 h1"> To Do</h2></Link>
                <AuthBar/>
            </div>
        </nav>
    )
}