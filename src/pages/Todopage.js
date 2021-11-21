import React, { useEffect } from 'react';
import { Link } from 'react-navi'
import { useResource } from 'react-request-hook';
import ToDoEntry from '../todo/ToDoEntry'



export default function TodoPage({ id }) {
    const [ todo, getTodo ] = useResource(() => ({
        url: `/todo/${id}`,
        method: 'get'
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