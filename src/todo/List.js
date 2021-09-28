import React from 'react'
import ListEntry from './ListEntry'

export default function List({listEntrys = []}) {
    return (
        <div>
            <h3>My ToDo List</h3>
            {listEntrys.map((p, i) => <ListEntry {...p} priority={p.priority} description={p.description} createdBy={p.createdBy} key={'ToDo-' + i} />)}
        </div> 
    )
}