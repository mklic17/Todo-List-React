import React from 'react'

export default function Logout({user}) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <p>Logged in User {user}</p>
            <input type="submit" value="Logout" />
        </form>
     )
 }