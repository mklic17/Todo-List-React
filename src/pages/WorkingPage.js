import React, { useContext, useEffect } from 'react';
import { useResource } from 'react-request-hook';
import { StateContext } from '../Context'
import CreateToDoEntry from '../todo/CreateToDoEntry'
import ToDoList from '../todo/ToDoList'
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


export default function WorkingPage() {

	const { state, dispatch } = useContext(StateContext);
	const { user } = state;

	const [toDos, getToDos] = useResource(() => ({
		url: '/todo/',
		method: 'get',
		headers: { 'Authorization': `${user.access_token}` }
	}));

	useEffect(() => {
		if(state.user.access_token) {
			getToDos();
		}
	}, []);

	useEffect(() => {
        getToDos();
		console.log('User Access Token-' + user.access_token);
    }, [user.access_token]);

	useEffect(() => {
		if (toDos && toDos.data) {
			dispatch({ type: 'FETCH_POSTS', toDos: toDos.data.todo })
		}
	}, [toDos])

	const { data, isLoading } = toDos;

	return (
		<div className="row">
			<div className="col-md-6">
				<CreateToDoEntry />
			</div>
			<div className="col-md-6">
				<Tabs defaultActiveKey="My" className="mb-3">
					<Tab eventKey="All" title="All Todo's">
						<p>All Todo's</p>
					</Tab>
					{/* <Tab eventKey="Friend" title="Friend Todo's">
						<p>Friend Todo's</p>
					</Tab> */}
					<Tab eventKey="My" title="My Todos">
						{isLoading && 'Todos are loading...'} <ToDoList/>
					</Tab>
				</Tabs>
				
			</div> 
		</div>
	)

}