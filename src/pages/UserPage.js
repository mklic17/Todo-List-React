import React, { useEffect, useContext } from 'react';
import { StateContext } from '../Context';
import { useResource } from 'react-request-hook';
import { Link } from 'react-navi';
import UserEntry from '../user/UserEntry';
import AllTodoList from '../todo/AllTodoList';


export default function UserPage({ id }) {
    const { state } = useContext(StateContext);

    const [ theUser, getUser ] = useResource(() => ({
        url: `/user/${id}`,
        method: 'get',
        headers: {"Authorization": `${state.user.access_token}`}
    }));

    const [userTodos, getUserTodos ] = useResource(() => ({
        url: `/todo/user/${id}`,
        method: 'get',
        headers: {"Authorization": `${state.user.access_token}`}
    }));


    useEffect(() => {
        getUser();
        getUserTodos();
    }, []);

    return (
        <span>
            <div><Link href="/user/all">All User Page</Link></div>
            <h1>Viewing User</h1>
            {(theUser.data && theUser.isLoading === false)
                ?  <div><UserEntry id={id} name={theUser.data.name} username={theUser.data.username} email={theUser.data.email} profileImage={theUser.data.profileImage}/></div>
                : 'Loading...'
            }
            
            { (userTodos.data && userTodos.isLoading === false) 
                ? <AllTodoList allToDos={userTodos.data.todo} />
                : 'Loading...'
            }
        </span>
        
    )

}
