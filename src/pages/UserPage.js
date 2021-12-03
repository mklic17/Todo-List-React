import React, { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
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
            <br/>
            <div><Link href="/user/all">All User Page</Link></div>
            {(theUser.data && theUser.isLoading === false && userTodos.data && userTodos.isLoading === false)
                ?  <div><UserEntry id={id} name={theUser.data.name} username={theUser.data.username} email={theUser.data.email} profileImage={theUser.data.profileImage} totalCount={userTodos.data.todo.length}/></div>
                : 'Loading...'
            }
            
            { (userTodos.data && userTodos.isLoading === false) 
                ? <AllTodoList allToDos={userTodos.data.todo} />
                : 'Loading...'
            }
        </span>
        
    )

}
