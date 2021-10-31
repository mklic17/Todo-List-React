import React, { useContext } from 'react'
// import { StateContext } from './Context'


export default function User ({firstName, lastName, email, password }) {

    // const {state} = useContext(StateContext);
    // const {user} = state;
    // console.log(user)

    return (
         <div>
            <h3>{email}</h3>
            <div>{password}</div>
            <br />
            <i>Written by <b>{firstName} {lastName}</b></i>
        </div> 
   )
}
  