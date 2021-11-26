import React, { useEffect }  from 'react';
import { useContext } from 'react/cjs/react.development';
import { useResource } from 'react-request-hook'
import UserListEntry from './UserListEntry';
import { StateContext } from '../Context';
import { Link } from 'react-navi'
import './user.css';

export default function UserList() {
    const { state } = useContext(StateContext);

    const [ theUsers, getAllUsers ] = useResource(() => ({
        url: '/user/',
        method: 'get',
        headers: {"Authorization": `${state.user.access_token}`}
    }));

    useEffect(() =>{
        getAllUsers()
    }, [])

    return (
        <div className="col-md-8 align-self-center">
            <div><Link href="/">Go back</Link></div>
            {/* Source: https://www.bootdey.com/snippets/view/bs4-Trending-Articles  */}
            <div className="articles card">
                <div className="card-header d-flex align-items-center">
                    <h2 className="h3">Discover other Users</h2>
                </div>
                <div className="card-body no-padding">
                    {(theUsers.data && theUsers.isLoading === false)
                         ? Object.values(theUsers.data).map((u, i) => <UserListEntry {...u} id={u._id} name={u.name} username={u.username} profileImage={u.profileImage} key={'user-' + i}/>)
                         : 'Loading...'
                    }
                </div>
            </div>
        </div>
    )
}