import React, {useState, useContext, useEffect} from 'react'
import ToDoEntry from './ToDoEntry'
import ColorHeader from '../theme/ColorHeader'
import { ThemeContext, StateContext } from '../Context'
import { useResource } from 'react-request-hook'

export default function List() {

    const {state} = useContext(StateContext);
    const {toDo} = state;
    const [ color, setColor ] = useState(ThemeContext);

    // const [toDo, getToDo] = useResource(() => ({
    //     url: `/todos/${id}`,
    //     method: 'get'
    // }))

    // useEffect(getToDo, []);

    // const {data, isLoading} = toDo;

    return (
        <div>
            <h2>My ToDo List</h2>
            <ThemeContext.Provider value={{primary: color}}>
                <ColorHeader setColor={setColor}/>

                {/* {isLoading && 'Loading To Do Posts'} */}

                <ul>
                    {/* { data && data.map((p, i) => <ToDoEntry {...p} id={p.id} title={p.title} description={p.description} createdBy={p.createdBy} createdDate={p.createdDate} dateCompleted={p.dateCompleted} key={'ToDo-' + i}/>)} */}
                    { toDo.map((p, i) => <ToDoEntry {...p} id={p.id} title={p.title} description={p.description} createdBy={p.createdBy} createdDate={p.createdDate} dateCompleted={p.dateCompleted} key={'ToDo-' + i}/>)}
                </ul>
            </ThemeContext.Provider>
        </div>
    )
}
