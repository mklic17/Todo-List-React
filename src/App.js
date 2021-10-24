import React, { useReducer, useEffect } from 'react'
import Navbar from './fragments/navbar'
import ToDoList from './todo/ToDoList'
import CreateToDoEntry from './todo/CreateToDoEntry'
import appReducer from './Reducer'
import Login from './auth/Login'
import Registration from './auth/Registration'
import 'bootstrap/dist/css/bootstrap.css'
import { StateContext } from './Context'
import { useResource } from 'react-request-hook';
 
function App() {

  const [toDos, getToDos] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }));

  const [state, dispatch] = useReducer(appReducer, {user: '', toDo: []});
  const { user } = state;

  useEffect(getToDos, []); // initial get of all the Posts


  useEffect(() => {
      if (toDos && toDos.data) {
          dispatch({ type: 'FETCH_POSTS', toDos: toDos.data })
      }
  }, [toDos])

  let main;
  if(user)
    main = 
      <div className="row">
          <div className="col-md-6">
            <CreateToDoEntry />
          </div>
          <div className="col-md-6">
            <ToDoList/>
          </div> 
      </div>
    else {
      main = 
        <div className="row">
          <div className="col-md-6">
            <Login/>
          </div>
          <div className="col-md-6">
            <Registration/>
          </div>
        </div>
    }

  return (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <Navbar/>
        <div className="container">
          { main }
        </div>
      </StateContext.Provider>
    </div>
  )
}

export default App;
