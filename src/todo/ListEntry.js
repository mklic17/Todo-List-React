import React from 'react'
import './todo.css'



export default function ListEntry({priority, description, createdBy, createdDate}) {
    return (
        <div id="listStyling">
            <h3>Priority: { priority }</h3>
            <p>{ description }</p>
            <p>{createdBy}</p>
        </div>
    )
}