import React from 'react';
import BaseToDo from './BaseToDo'


export default function AllTodoList({allToDos}) {
    let arr = Object.values(allToDos);
    console.log('The Arr');
    console.log(arr);
    return (
        <div>
            <ul>
                { arr.length === 0 && <h2>No Todo's Exist</h2> }
                { arr.length > 0 && arr.map((p, i) => <BaseToDo {...p} id={p.id} title={p.title} description={p.description} createdDate={p.createdDate} completedDate={p.completedDate} key={'ToDo-' + i}/>) }
            </ul>
        </div>
    )

}