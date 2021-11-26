import React from 'react'

export default function User ({firstName, lastName, email, password }) {

    return (
         <div>
            <h3>{email}</h3>
            <div>{password}</div>
            <br />
            <i>Written by <b>{firstName} {lastName}</b></i>
        </div> 
   )
}
  