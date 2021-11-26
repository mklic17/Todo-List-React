import React, { useEffect, useContext } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../Context';
import CreateToDoEntry from '../todo/CreateToDoEntry';
import ToDoList from '../todo/ToDoList';
import AllTodoList from '../todo/AllTodoList'
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export default function WorkingPage() {

	const { state, dispatch } = useContext(StateContext);
	const { user } = state;

	const [toDos, getToDos] = useResource(() => ({
		url: '/todo/',
		method: 'get',
		headers: { 'Authorization': `${user.access_token}` }
	}));

	const [allToDos, getAllToDos] = useResource(() => ({
		url: '/todo/all',
		method: 'get',
		headers: { 'Authorization': `${user.access_token}` }
	}));

	useEffect(() => {
		if(state.user.access_token) {
			getToDos();
			getAllToDos();
		}
	}, []);

	useEffect(() => {
        getToDos();
		getAllToDos();
    }, [user.access_token]);

	useEffect(() => {
		if (toDos && toDos.data) {
			dispatch({ type: 'FETCH_POSTS', toDos: toDos.data.todo })
		}
	}, [toDos]);

	return (
		<div className="row">
			<div className="col-md-6">
				<CreateToDoEntry />
			</div>
			<div className="col-md-6">
				<Tabs defaultActiveKey="My" className="mb-3">
					<Tab eventKey="All" title="All Todo's">
						<h2>All Todo's</h2>
						<div>
							{ (allToDos.data && allToDos.isLoading === false) 
								? <AllTodoList allToDos={allToDos.data.todo} />
								: 'Loading...'
							}
						</div>
					</Tab>
					{/* <Tab eventKey="Friend" title="Friend Todo's">
						<p>Friend Todo's</p>
					</Tab> */}
					<Tab eventKey="My" title="My Todos">
						{toDos.isLoading === true && 'Todos are loading...'} 
						{toDos.isLoading === false} <ToDoList/>
					</Tab>
				</Tabs>
				
			</div> 
		</div>
	)

}