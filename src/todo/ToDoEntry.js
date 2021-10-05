import React, {useState} from 'react'
import './todo.css'
import 'font-awesome/css/font-awesome.css'



export default function ToDoEntry({uid, title, description, createdBy, createdDate, completedDate, dispatch}) {
    let completedVar;

    const markAsComplete = () => {dispatch({type: 'TOGGLE_TODO', uid: uid})};
    const deleteEntry = () => {dispatch({type: 'DELETE_TODO', uid: uid})};

    if(completedDate) {
        const dateToComplete = Math.ceil((completedDate - createdDate) / (1000 * 3600 * 24));
        completedVar = <p>Completed <i class="fa fa-check fa-lg" id="greenFont"></i> { dateToComplete } day(s) ago</p>;
    } else {
        completedVar = 
            <div>
                <p>Not Completed <i class="fa fa-times" id="redFont"></i></p>
                    <button onClick={markAsComplete}>Mark As Complete </button>
            </div>
    }
    return (
        <div id="listStyling">
            <h3>{ title }</h3>
            <p>{uid}</p>
            <p>{ description }</p>
            <p>{ createdBy }</p>
            <p>{ new Date(createdDate).toString() }</p>
            { completedVar }
            <p><button onClick={deleteEntry}>Delete</button></p>
        </div>
    );
}

