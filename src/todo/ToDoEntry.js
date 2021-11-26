import React, { useEffect, useContext } from 'react'
import {ThemeContext, StateContext} from '../Context'
import { useResource } from 'react-request-hook';
import './todo.css'
import 'font-awesome/css/font-awesome.css'

export default function ToDoEntry({ id, title, description, createdBy, createdDate, completedDate }) {
    let completedVar;
    let completeButton;
    let buttonLayout;

    const { dispatch, state } = useContext(StateContext);
    const theme = useContext(ThemeContext);
    const colorName = theme.primary;

    const [completedToDo, patchTodo] = useResource((toDoId) => ({
        url: `/todo/${toDoId}/complete`,
        method: 'PATCH',
        headers: { 'Authorization': `${state.user.access_token}` }
    }));     

    const [deleteToDo, deleteTodo ] = useResource((toDoId) => ({
        url: `/todo/${toDoId}`,
        method: 'DELETE',
        headers: { 'Authorization': `${state.user.access_token}` }
    }));

    useEffect(() => {
        if(completedToDo && completedToDo.data && completedToDo.isLoading === false) {
            dispatch({type: 'TOGGLE_TODO', id: id, completedDate: completedToDo.data.completedDate});
        }
    }, [completedToDo]);

    useEffect(() => {
        if(deleteToDo && deleteToDo.data && deleteToDo.isLoading === false) {
            dispatch({type: 'DELETE_TODO', id: id});
        }
    }, [deleteToDo]);


    if (completedDate) {
        const dateToComplete = Math.ceil((Date.now() - completedDate) / (1000 * 3600 * 24));
        completedVar = <p>Completed <i className="fa fa-check fa-lg" id="greenFont"></i> { dateToComplete } day(s) ago</p>;
        buttonLayout = "oneButtonLayout";
    } else {
        completedVar = <p>Not Completed <i className="fa fa-times" id="redFont"></i></p>;
        completeButton = <button onClick={(evt) => patchTodo(id)} className="btn btn-success">Complete</button>;
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
                <button onClick={ (evt) => {deleteTodo(id)} } className="btn btn-danger">Delete</button>
            </div>
            </div>
        </li>
    );
}
