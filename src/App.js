	import React, { useReducer } from 'react'
	import Navbar from './fragments/navbar'
	import { mount, route } from 'navi';
	import { Router, View } from 'react-navi';
	import appReducer from './Reducer'
	import 'bootstrap/dist/css/bootstrap.css'
	import { StateContext } from './Context'
	import WelcomePage from './pages/WelcomePage';
	// import TodoPage from './pages/TodoPage';
	import UserPage from './pages/UserPage';
	import AllUsersPage from './pages/AllUsersPage';



	function App() {

	const [state, dispatch] = useReducer(appReducer, {user: {}, toDo: []});
	// const { user } = state;

	const routes = mount({
		'/': route({ view: <WelcomePage/> }),
		'/user/all': route({ view: <AllUsersPage/> }),
		'/user/:id': route(req => {
				return { view: <UserPage id={req.params.id} /> }
		}),		
		// '/todo/:id': route(req => {
		// 	return { view: <TodoPage id={req.params.id} /> }
		// }),		
	// future
	});

	return (
	<div>
		<StateContext.Provider value={{state: state, dispatch: dispatch}}>
		<Router routes = { routes }>
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
