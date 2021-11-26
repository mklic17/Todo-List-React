import React from 'react'
import { useContext } from 'react/cjs/react.development';
import { StateContext } from '../Context'

export default function Logout() {
    const { state, dispatch } = useContext(StateContext)

    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'LOGOUT'});}}>
            <p>Logged in User <b>{state.user.username}</b></p>
            <input type="submit" value="Logout" />
        </form>
     )
 }