import React from 'react'
import './todo.css'
import 'font-awesome/css/font-awesome.css'



export default function ToDoEntry({uid, title, description, createdBy, createdDate, completedDate, dispatch}) {
    let completedVar;

    const markAsComplete = () => {dispatch({type: 'TOGGLE_TODO', uid: uid})};
    const deleteEntry = () => {dispatch({type: 'DELETE_TODO', uid: uid})};

    if(completedDate) {
        const dateToComplete = Math.ceil((Date.now() - completedDate) / (1000 * 3600 * 24));
        completedVar = <p>Completed <i class="fa fa-check fa-lg" id="greenFont"></i> { dateToComplete } day(s) ago</p>;
    } else {
        completedVar = 
            <div>
                <p>Not Completed <i class="fa fa-times" id="redFont"></i></p>
                    <button onClick={markAsComplete}>Mark As Complete </button>
            </div>
    }
    return (
        <li class="quote-container">
            <div class="note yellow">
                <h3>{ title }</h3>
                <p>{ description }</p>
                <p>{ new Date(createdDate).toString() }<br/></p>
                { completedVar }
                <button onClick={ deleteEntry }>Delete</button>
            </div>
        </li>
    );
}
