import React, { useContext, useEffect } from 'react';
import { StateContext } from '../Context';
import { useResource } from 'react-request-hook';
import { Link } from 'react-navi';
import UserEntry from '../user/UserEntry';


export default function UserPage({ id }) {
    const { state } = useContext(StateContext);

    const [ theUser, getUser ] = useResource(() => ({
        url: `/user/${id}`,
        method: 'get',
        headers: {"Authorization": `${state.user.access_token}`}
    }));

    useEffect(() => {
        getUser();
    }, []);

    return (
        <span>
            <h1>User Page</h1>
            {(theUser.data && theUser.isLoading === false)
                ?  <div><UserEntry id={id} name={theUser.data.name} username={theUser.data.username} email={theUser.data.email} profileImage={theUser.data.profileImage}/></div>
                : 'Loading...'
            }

            <div><Link href="/user/all">Go back</Link></div>
        </span>
    )

}
