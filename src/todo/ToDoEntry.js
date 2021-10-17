import React, { useContext } from 'react'
import './todo.css'
import 'font-awesome/css/font-awesome.css'
import {ThemeContext, StateContext} from '../Context'


export default function ToDoEntry({id, title, description, createdBy, createdDate, completedDate}) {
    let completedVar;
    let completeButton;
    let buttonLayout;

    const {dispatch} = useContext(StateContext);
    const theme = useContext(ThemeContext);
    const colorName = theme.primary;

    const markAsComplete = () => {dispatch({type: 'TOGGLE_TODO', id: id})};
    const deleteEntry = () => {dispatch({type: 'DELETE_TODO', id: id})};


    if (completedDate) {
        const dateToComplete = Math.ceil((Date.now() - completedDate) / (1000 * 3600 * 24));
        completedVar = <p>Completed <i className="fa fa-check fa-lg" id="greenFont"></i> { dateToComplete } day(s) ago</p>;
        buttonLayout = "oneButtonLayout";
    } else {
        completedVar = <p>Not Completed <i className="fa fa-times" id="redFont"></i></p>;
        completeButton = <button onClick={markAsComplete} className="btn btn-success">Complete</button>;
        buttonLayout = "twoButtonLayout";
    }

    return (
        <li className="quote-container">
            <div className="note note-background" style={ { background: colorName} }>
                <h3>{ title }</h3>
                <p>{ description }</p>
                <p>{ new Date(createdDate).toLocaleDateString('en-US') }<br/></p>
                { completedVar }
                <div id={buttonLayout}>
                    { completeButton }
                    <button onClick={ deleteEntry } className="btn btn-danger">Delete</button>
                </div>
            </div>
        </li>
    );
}
