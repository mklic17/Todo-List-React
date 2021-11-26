import React, { useState, useContext } from 'react';
import Logout from '../auth/Logout'
import Login from '../auth/Login'
import Register from '../auth/Registration'
import { StateContext } from '../Context'
import { Button } from 'react-bootstrap'
import { Link } from 'react-navi'


export default function AuthBar() {

    const { state } = useContext(StateContext);
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    let userCodeInNavbar;

    if(state.user.username) {
        userCodeInNavbar = 
        <span>
            <Logout/>
            <Link href={`/user/${state.user.id}`}>My Profile</Link>
            <br/>
            <Link href={`/user/all`}>Discover other Users</Link>
        </span>
            

    } else {
        userCodeInNavbar = 
        <div className="justify-content-end">
            <Button variant="link" onClick={(e) => setShowLogin(true)}>
                Login
            </Button>
            <Login show={showLogin} handleClose={() => setShowLogin(false)} />

            <Button variant="link" onClick={(e) => setShowRegister(true)}>
                Register
            </Button>
            <Register show={showRegister} handleClose={() => setShowRegister(false)} />
        </div>
    }

    return (
        <span>
            { userCodeInNavbar }
        </span>
    )
}