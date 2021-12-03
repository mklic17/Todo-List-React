import React, { useEffect, useContext } from 'react';
import { Link } from 'react-navi'
import { useResource } from 'react-request-hook';
import ToDoEntry from '../todo/ToDoEntry'
import { StateContext } from '../Context';



export default function TodoPage({ id }) {
    const { state } = useContext(StateContext);

    const [ todo, getTodo ] = useResource(() => ({
        url: `/todo/${id}`,
        method: 'get',
        headers: { 'Authorization': `${state.user.access_token}` }
    }))

    useEffect(getTodo, [id])

    return (
        <div>
            {(todo && todo.data)
                ? <ToDoEntry {...todo.data} />
                : 'Loading...'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}