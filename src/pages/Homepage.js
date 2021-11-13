import React, { useContext, useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../Context'
import CreateToDoEntry from '../todo/CreateToDoEntry'
import ToDoList from '../todo/ToDoList'


export default function Homepage() {

    const { state, dispatch } = useContext(StateContext);

    const [toDos, getToDos] = useResource(() => ({
        url: '/todos',
        method: 'get'
      }));

    useEffect(getToDos, []); // initial get of all the todos

    useEffect(() => {
        if (toDos && toDos.data) {
            dispatch({ type: 'FETCH_POSTS', toDos: toDos.data })
        }
    }, [toDos])


    const {data, isLoading } = toDos;
    return (
        <div className="row">
          <div className="col-md-6">
            <CreateToDoEntry />
          </div>
          <div className="col-md-6">
          {isLoading && 'Todos are loading...'} <ToDoList/>
          </div> 
      </div>
    )

}