import React, {useContext} from 'react'
import { StateContext } from '../Context'

export default function Logout() {
    const {state, dispatch} = useContext(StateContext)

    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'LOGOUT'});}}>
            <p>Logged in User <b>{state.user}</b></p>
            <input type="submit" value="Logout" />
        </form>
     )
 }