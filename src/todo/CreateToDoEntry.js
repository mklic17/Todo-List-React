import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from '../Context';
import { useResource } from 'react-request-hook';

export default function CreateListEntry () {

    const { state, dispatch } = useContext(StateContext);
    const { user } = state;
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const[todo, createToDoEntry] = useResource(({ title, description }) => ({
        url: '/todo',
        method: 'post',
        headers: { 'Authorization': `${state.user.access_token}` },
        data: { title, description, createdBy: user.username }
    }));

    function handleCreate () {
        createToDoEntry({ title: formData.title, description: formData.description})
    }

    useEffect(() => {
        if(todo && todo.data && todo.isLoading === false) {
            console.log('Todo: ' + todo.data.id);
            dispatch({type: 'CREATE_TODO', id: todo.data.id, title: formData.title, description: formData.description, createdBy: user.username, createdDate: todo.data.createdDate, completedDate: todo.data.completedDate})
        }
    }, [todo]);

    return (
        <form onSubmit={evt => { evt.preventDefault(); handleCreate();}}>
            <div className="form-group">
            <label htmlFor="create-title">Title:</label>
                <br/>
                <input type="text" className="form-control" value={ formData.title } onChange={ evt => setFormData({...formData, title: evt.target.value})} name="create-title" id="create-title"/>
                <br/>
                <label htmlFor="create-description">Description:</label>
                <br/>
                <textarea type="text" className="form-control" value={formData.description} onChange={evt => setFormData({...formData, description: evt.target.value})} name="create-description" id="create-description" cols="40" rows="5"/>
                <br/>
                <p>Author: <b>{ user.username }</b></p>
                <br/>
            </div>
            <input type="submit" value="Create" />
        </form>   
    )
 }