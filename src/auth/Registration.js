import React, { useState, useContext, useEffect } from 'react';
import { StateContext } from '../Context';
import { useResource } from 'react-request-hook';
import { Form, Modal, Button } from 'react-bootstrap'

export default function Registration({show, handleClose}) {

    const {dispatch} = useContext(StateContext);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        repeatPassword: ''
    });
    const [ user, register ] = useResource((username, password) => ({
        url: '/users',
        method: 'post',
        data: { username, password }
    }))

    useEffect(() => {
        if (user && user.data) {
            dispatch({ type: 'REGISTRATION', username: user.data.username })
        }
    }, [user])

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={evt => { evt.preventDefault(); register(formData.username, formData.password); handleClose(); } }>
                
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Label htmlFor="name-input">Name</Form.Label>
                    <Form.Control type="text" name="name-input" value={formData.name} onChange={evt => setFormData({...formData, name: evt.target.value})} placeholder="Name"/>
                    <br/>
                    <Form.Label htmlFor="username-input">User name</Form.Label>
                    <Form.Control type="text" name="username-input" value={formData.username} onChange={evt => setFormData({...formData, username: evt.target.value})} placeholder="Username"/>
                    <br/>
                    <Form.Label htmlFor="password-input">Password</Form.Label>
                    <Form.Control type="password" name="password-input" value={formData.password} onChange={evt => setFormData({...formData, password: evt.target.value})} placeholder="Password"/>
                    <br/>
                    <Form.Label htmlFor="repeat-password">Repeat Password</Form.Label>
                    <Form.Control type="password" name="repeat-password" value={formData.repeatPassword} onChange={evt => setFormData({...formData, repeatPassword: evt.target.value})} placeholder="Password Confirmation"/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" type="submit" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat}>Register</Button>
                </Modal.Footer>
    
            </Form>
        </Modal>
    );
}