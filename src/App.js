import React from 'react'
import Navbar from './fragments/navbar'
import Logout from './auth/Logout'
import List from './todo/List'
import CreateListEntry from './todo/CreateListEntry'

function App() {
  const toDoListItems = [
    {
      priority: 3,
      description: "Fold the Laundry",
      createdBy: "Mitchell Klich"
    },
    {
      priority: 1,
      description: "Finish your Homework for CSC 436",
      createdBy: "Mitchell Klich"
    }
  ]
  
  const user = "Mitchell Klich";


  return (
    <div>
      <Navbar user={user}/>
      <div class="row">
           <div class="col-md-6">             
            <CreateListEntry user="Update This"/>
          </div>
          <div class="col-md-6">
            <List listEntrys={toDoListItems} />
          </div> 
          <Logout user={user}/> {/* This wouldn't be here normally, just showing on page */}

      </div>
    </div>
  )


}

export default App;
