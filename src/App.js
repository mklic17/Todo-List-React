import React, { useReducer } from 'react'
import Navbar from './fragments/navbar'
import ToDoList from './todo/ToDoList'
import CreateToDoEntry from './todo/CreateToDoEntry'
import appReducer from './Reducer'
import Login from './auth/Login'
import Registration from './auth/Registration'
import 'bootstrap/dist/css/bootstrap.css'
import { StateContext } from './Context'
 
function App() {
  const toDoListItems = [
    {
      id: '12456',
      title: "Laundry",
      description: "Fold the Laundry",
      createdBy: "Mitchell Klich",
      createdDate: 1632867561374,
      completedDate: 1632867562374
    },
    {
      id: '15515',
      title: "Homework",
      description: "Finish your Homework for CSC 436",
      createdBy: "Mitchell Klich",
      createdDate: 1632867563374,
      completedDate: null
    }
  ]

  const [state, dispatch] = useReducer(appReducer, {user: '', toDo: toDoListItems});
  const { user } = state; // Define the starting state

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
