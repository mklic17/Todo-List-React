import React, {useState, useContext } from 'react'
import ToDoEntry from './ToDoEntry'
import ColorHeader from '../theme/ColorHeader'
import { ThemeContext, StateContext } from '../Context'

export default function List() {

    const { state } = useContext(StateContext);
    const { toDo } = state;
    const [ color, setColor ] = useState(ThemeContext);

    return (
        <div>
            <ThemeContext.Provider value={{primary: color}}>
                <ColorHeader setColor={setColor}/>
                <ul>
                    { toDo.length === 0 && <h2>No Todo's Exist</h2> }
                    { toDo.length > 0 && toDo.map((p, i) => <ToDoEntry {...p} id={p.id} title={p.title} description={p.description} createdBy={p.createdBy} createdDate={p.createdDate} completedDate={p.completedDate} key={'ToDo-' + i}/>) }
                </ul>
            </ThemeContext.Provider>
        </div>
    )
}
