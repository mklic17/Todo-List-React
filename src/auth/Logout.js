import React from 'react'

export default function Logout({user, setUser}) {
    return (
        <form onSubmit={e => {e.preventDefault(); setUser('');}}>
            <p>Logged in User {user}</p>
            <input type="submit" value="Logout" />
        </form>
     )
 }