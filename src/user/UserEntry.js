import React from 'react';
import './user.css';


export default function UserEntry({ id, name, username, email, profileImage, totalCount} ) {
    let imageUrl = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';
    if(profileImage) {
        imageUrl = profileImage;
    }

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card">
                {/* <div className="upper"> <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid"/> </div> */}
                <div className="user text-center">
                    <div className="profile"> <img src={ imageUrl } className="rounded-circle" width="80"/></div>
                </div>
                <div className="mt-5 text-center">
                    <h4 className="mb-0">{ name }</h4>
                    <span className="text-muted d-block mb-2">{ username }</span>
                    <span className="text-muted d-block mb-2">{ email }</span>
                    <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                        <div className="stats">
                            <h6 className="mb-0">Total Todos Tracked</h6> <span>{ totalCount }</span>
                        </div>
                        {/* <div className="stats">
                            <h6 className="mb-0">Projects</h6> <span>142</span>
                        </div> */}
                        <div className="stats">
                            <h6 className="mb-0">Todos Completed</h6> <span> { 0 } </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}