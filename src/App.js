import React from 'react'
import Navbar from './fragments/navbar'
import Logout from './auth/Logout'
import List from './todo/List'
import CreateListEntry from './todo/CreateListEntry'

function App() {
  const toDoListItems = [
    {
      title: "Laundry",
      description: "Fold the Laundry",
      createdBy: "Mitchell Klich",
      createdDate: 1632867561374,
      complete: true,
      dateCompleted: 1632867562374
    },
    {
      title: "Homework",
      description: "Finish your Homework for CSC 436",
      createdBy: "Mitchell Klich",
      createdDate: 1632867563374,
      complete: false,
      dateCompleted: 0
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
