import React, {useState} from 'react'
import ToDoEntry from './ToDoEntry'
import ColorHeader from '../theme/ColorHeader'
import { ThemeContext } from '../Context'

export default function List({posts = [], dispatchPosts}) {

    const [ color, setColor ] = useState('');

    return (
        <div>
            <h2>My ToDo List</h2>
            <ThemeContext.Provider value={{primary: color}}>
                <ColorHeader setColor={setColor}/>
                <ul>
                    { posts.map((p, i) => <ToDoEntry {...p} uid={p.uid} title={p.title} description={p.description} createdBy={p.createdBy} createdDate={p.createdDate} dateCompleted={p.dateCompleted} key={'ToDo-' + i} dispatch={dispatchPosts} />)}
                </ul>
            </ThemeContext.Provider>
        </div> 
    )
}
