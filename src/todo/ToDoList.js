import React from 'react'
import ToDoEntry from './ToDoEntry'

export default function List({posts = [], dispatchPosts}) {
    return (
        <div>
            <h3>My ToDo List</h3>
            { posts.map((p, i) => <ToDoEntry {...p} uid={p.uid} title={p.title} description={p.description} createdBy={p.createdBy} createdDate={p.createdDate} dateCompleted={p.dateCompleted} key={'ToDo-' + i} dispatch={dispatchPosts} />)}
        </div> 
    )
}
