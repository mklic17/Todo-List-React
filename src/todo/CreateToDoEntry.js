import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from '../Context';
import { useResource } from 'react-request-hook';

export default function CreateListEntry () {

    const {state, dispatch} = useContext(StateContext);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        createdBy: state.user,
        createdDate: Date.now(),
        completedDate: undefined
    });

    const[todo, createToDoEntry] = useResource(({ title, description, createdBy, createdDate, completedDate }) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, createdBy, createdDate, completedDate }
    }));

    function handleCreate () {
        createToDoEntry({ title: formData.title, description: formData.description, createdBy: state.user, createdDate: formData.createdDate, completedDate: null })
    }

    useEffect(() => {
        if(todo && todo.data) {
            console.log(todo.data)
            dispatch({type: 'CREATE_TODO', id: todo.data.id, title: todo.data.title, description: todo.data.description, createdBy: todo.data.user, createdDate: todo.data.createdDate, completedDate: todo.data.completedDate})
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
                <p>Author: <b>{ state.user }</b></p>
                <br/>
            </div>
            <input type="submit" value="Create" />
        </form>   
    )
 }