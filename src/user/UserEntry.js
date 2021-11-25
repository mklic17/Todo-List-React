import React from 'react';

export default function UserEntry({ id, name, username, email, profileImage} ) {
    let imageUrl = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
    if(profileImage) {
        imageUrl = profileImage;
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>{username}</p>
            <p>{email}</p>
            <img src={imageUrl} alt="..."/>
        </div>
        
    )
}