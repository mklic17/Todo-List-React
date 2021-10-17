import React, {useState, useContext} from 'react'
import { StateContext } from '../Context';

export default function CreateListEntry () {

    const {state, dispatch} = useContext(StateContext);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        createdBy: state.user,
        createdDate: '',
        completedDate: null
    });

     return (
          <form onSubmit={evt => { evt.preventDefault(); dispatch({type: 'CREATE_TODO', title: formData.title, description: formData.description, createdBy: state.user, createdDate: Date.now(), completedDate: null});}}>
             <div class="form-group">
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
 

// <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
// </form>