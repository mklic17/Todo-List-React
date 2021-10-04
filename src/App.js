import React, { useState, useReducer } from 'react'
import Navbar from './fragments/navbar'
import ToDoList from './todo/ToDoList'
import CreateToDoEntry from './todo/CreateToDoEntry'
import appReducer from './Reducer'

function App() {
  const toDoListItems = [
    {
      title: "Laundry",
      description: "Fold the Laundry",
      createdBy: "Mitchell Klich",
      createdDate: 1632867561374,
      completedDate: 1632867562374
    },
    {
      title: "Homework",
      description: "Finish your Homework for CSC 436",
      createdBy: "Mitchell Klich",
      createdDate: 1632867563374,
      completedDate: null
    }
  ]
  
  const [state, dispatch] = useReducer(appReducer, {user: '', toDo: toDoListItems});
  const { user, toDo } = state; // Define the starting state

  return (
    <div>
      <Navbar user={ user } dispatchUser={ dispatch }/>
      <div class="row">
           <div class="col-md-6">
            <CreateToDoEntry user={ user } dispatchPosts={ dispatch }/>
          </div>
          <div class="col-md-6">
            <ToDoList posts={ toDo } />
          </div> 

      </div>
    </div>
  )


}

export default App;
