import React from 'react'


export default function Registration() {

    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="firstName-input">First Name</label>
            <input type="text" name="firstName-input" id="firstName-input" />
            <br/>
            <label htmlFor="lastName-input">First Name</label>
            <input type="text" name="lastName-input" id="lastName-input" />
            <br/>
            <label htmlFor="register-password">Password:</label>
            <input type="password" name="register-password" id="register-password" />
            <br/>
            <label htmlFor="register-password-repeat">Repeat password:</label>
            <input type="password" name="register-password-repeat" id="register-password-repeat" />
            <br/>
            <input type="submit" value="Register" />
        </form>   
    )
}