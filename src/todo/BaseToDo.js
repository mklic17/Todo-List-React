import React from 'react';
import './todo.css'
import 'font-awesome/css/font-awesome.css'

export default function BaseToDo({id, title, description, createdDate, completedDate}) {

    let completedVar;
    if (completedDate) {
        const dateToComplete = Math.ceil((Date.now() - completedDate) / (1000 * 3600 * 24));
        completedVar = <p>Completed <i className="fa fa-check fa-lg" id="greenFont"></i> { dateToComplete } day(s) ago</p>;
    } else {
        completedVar = <p>Not Completed <i className="fa fa-times" id="redFont"></i></p>;
    }

    return (
        <li className="quote-container">
            <div className="note note-background" style={ { background: "#feff9c"} }>
                <h3>{ title }</h3>
                <p>{ description }</p>
                <p>{ new Date(createdDate).toLocaleDateString('en-US') }<br/></p>
                { completedVar }
            </div>
        </li>
    )
}