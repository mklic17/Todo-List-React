import React, { useReducer } from 'react'
import Navbar from './fragments/navbar'
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import appReducer from './Reducer'
import 'bootstrap/dist/css/bootstrap.css'
import { StateContext } from './Context'
import Homepage from './pages/Homepage';

 
function App() {

  const [state, dispatch] = useReducer(appReducer, {user: '', toDo: []});
  const { user } = state;
  
  const routes = mount({
    '/': route({view: <Homepage/>}),
    // future
    // '/todo/:id': route({view: <ToDoEntry>}),
    // '/user/:id': route({view <UserPage/>})
    // '/user/all': route({view <AllUsers/>})
  })

  return (
    <div>
      <StateContext.Provider value={{state: state, dispatch: dispatch}}>
        <Router routes = {routes}>
          <Navbar/>
          <div className="container">
            <View/>
          </div>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;
