import React, {useState} from 'react'

export default function CreateListEntry ({user, dispatchPosts}) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        createdBy: user,
        createdDate: '',
        completedDate: null
    });

     return (
          <form onSubmit={evt => { evt.preventDefault(); dispatchPosts({type: 'CREATE_TODO', title: formData.title, description: formData.description, createdBy: user, createdDate: Date.now(), completedDate: null});}}>
             <div>
                <label htmlFor="create-title">title:</label>
                 <br/>
                 <input type="text" value={ formData.title } onChange={ evt => setFormData({...formData, title: evt.target.value})} name="create-title" id="create-title"/>
                 <br/>
                 <label htmlFor="create-description">Description:</label>
                 <br/>
                 <textarea type="text" value={formData.description} onChange={evt => setFormData({...formData, description: evt.target.value})} name="create-description" id="create-description" cols="40" rows="5"/>
                 <br/>
                 <p>Author: <b>{ user }</b></p>
                 <br/>
             </div>
             <input type="submit" value="Create" />
         </form>   
          )
 }
 