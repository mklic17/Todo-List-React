import React from 'react'

export default function CreateListEntry ({user}) {
     return (
          <form onSubmit={e => e.preventDefault()}>
             
             <div>Author: <b>{user}</b></div>

             <div>
                 <label htmlFor="create-description">Description:</label>
                 <br/>
                 <textArea type="text" name="create-description" id="create-description" cols="40" rows="5"/>
                 <br/>
                 <label htmlFor="create-priority">Priority:</label>
                 <br/>
                 <input type="number" name="create-priority" id="create-priority"/>
             </div>

             <input type="submit" value="Create" />
         </form>   
          )
 }
 