import React from 'react'

export default function CreateListEntry ({user}) {
     return (
          <form onSubmit={e => e.preventDefault()}>
             
             <div>Author: <b>{user}</b></div>

             <div>
                <label htmlFor="create-title">title:</label>
                 <br/>
                 <input type="text" name="create-title" id="create-title"/>
                 <br/>
                 <label htmlFor="create-description">Description:</label>
                 <br/>
                 <textArea type="text" name="create-description" id="create-description" cols="40" rows="5"/>
                 <br/>
                 <label htmlFor="create-by">Name:</label>
                 <br/>
                 <input type="text" name="create-by" id="create-by"/> {/* will eventually become dynamic */}
                 <br/>
                 
             </div>

             <input type="submit" value="Create" />
         </form>   
          )
 }
 