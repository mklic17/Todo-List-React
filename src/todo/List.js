import React from 'react'
import ListEntry from './ListEntry'

export default function List({listEntrys = []}) {
    return (
        <div>
            <h3>My ToDo List</h3>
            {listEntrys.map((p, i) => <ListEntry {...p} title={p.title} description={p.description} complete={p.complete} dateCompleted={p.dateCompleted} key={'ToDo-' + i} />)}
        </div> 
    )
}