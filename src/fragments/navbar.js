import React, {useContext} from 'react';
import Logout from '../auth/Logout'
import 'bootstrap/dist/css/bootstrap.css'
import { StateContext } from '../Context'

export default function Navbar(){
    const {state} = useContext(StateContext);

    let userCodeInNavbar;
    if(state.user) {
        userCodeInNavbar = 
            <Logout/>
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