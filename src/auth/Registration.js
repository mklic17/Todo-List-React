import React, { useState, useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import { StateContext } from '../Context';
import { useResource } from 'react-request-hook';
import { Form, Modal, Button } from 'react-bootstrap'

export default function Registration({show, handleClose}) {

    const { dispatch } = useContext(StateContext);
    
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        profileImage: ''
    });

    const [ user, register ] = useResource(( name, username, email, password, repeatPassword, profileImage) => ({
        url: '/auth/register',
        method: 'post',
        data: { name, username, email, password, 'passwordConfirmation': repeatPassword, profileImage }
    }));

    const [ status, setStatus] = useState("")

    useEffect(() => {
        if (user && user.isLoading === false && (user.data || user.error)) {
            if (user.error) {
                console.log(user.error);
                setStatus("Registration failed, please try again later.");
                alert("fail");
            } else {
                console.log(user);
                setStatus("Registration successful. You may now login.");
                alert("success");
                dispatch({ type: 'REGISTRATION', 'id': user.data.id, username: user.data.username, access_token: user.data.access_token })
            }
        }
    }, [user])

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={evt => { evt.preventDefault(); register(formData.name, formData.username, formData.email, formData.password, formData.repeatPassword, formData.profileImage); handleClose(); } }>
                
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Label htmlFor="name-input">Name</Form.Label>
                    <Form.Control type="text" name="name-input" value={formData.name} onChange={evt => setFormData({...formData, name: evt.target.value})} placeholder="Name"/>
                    <br/>
                    <Form.Label htmlFor="username-input">Username</Form.Label>
                    <Form.Control type="text" name="username-input" value={formData.username} onChange={evt => setFormData({...formData, username: evt.target.value})} placeholder="Username"/>
                    <br/>
                    <Form.Label htmlFor="email-input">Email</Form.Label>
                    <Form.Control type="text" name="email-input" value={formData.email} onChange={evt => setFormData({...formData, email: evt.target.value})} placeholder="Email"/>
                    <br/>
                    <Form.Label htmlFor="password-input">Password</Form.Label>
                    <Form.Control type="password" name="password-input" value={formData.password} onChange={evt => setFormData({...formData, password: evt.target.value})} placeholder="Password"/>
                    <br/>
                    <Form.Label htmlFor="repeat-password">Repeat Password</Form.Label>
                    <Form.Control type="password" name="repeat-password" value={formData.repeatPassword} onChange={evt => setFormData({...formData, repeatPassword: evt.target.value})} placeholder="Password Confirmation"/>
                    <br/>
                    <Form.Label htmlFor="register-profileImage">Profile Image URL:</Form.Label>
                    <Form.Control type="url" name="register-profileImage"  value={formData.profileImage} onChange={e => setFormData({ ...formData, profileImage: e.target.value })} placeholder="Profile Image URL"/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" type="submit" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.repeatPassword}>Register</Button>
                </Modal.Footer>
    
            </Form>
        </Modal>
    );
}