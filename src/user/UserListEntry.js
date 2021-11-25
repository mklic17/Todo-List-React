import React from 'react';
import { Link } from 'react-navi'


export default function UserListEntry({ id, name, username, profileImage}) {

    let imageUrl = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
    if(profileImage) {
        imageUrl = profileImage;
    }

    return (
        <span>
            <div className="item d-flex align-items-center">
                <div className="image"><img src={ profileImage } alt="..." className="img-fluid rounded-circle"/></div>
                <div className="text">
                    <h3>{ name }</h3>
                    <small>Username: { username } </small>
                </div>
                <Link href={`/user/${id}`}>View User</Link>
            </div>
        </span>
    )
}