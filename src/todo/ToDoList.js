import React, {useState, useContext} from 'react'
import ToDoEntry from './ToDoEntry'
import ColorHeader from '../theme/ColorHeader'
import { ThemeContext, StateContext } from '../Context'

export default function List() {

    const {state} = useContext(StateContext);
    const {toDo} = state;
    const [ color, setColor ] = useState(ThemeContext);

    return (
        <div>
            <h2>My ToDo List</h2>
            <ThemeContext.Provider value={{primary: color}}>
                <ColorHeader setColor={setColor}/>
                <ul>
                    { toDo.map((p, i) => <ToDoEntry {...p} id={p.id} title={p.title} description={p.description} createdBy={p.createdBy} createdDate={p.createdDate} dateCompleted={p.dateCompleted} key={'ToDo-' + i}/>)}
                </ul>
            </ThemeContext.Provider>
        </div>
    )
}
