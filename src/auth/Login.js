import React, { useState, useEffect, useContext } from 'react'
import { StateContext } from '../Context';
import { useResource } from 'react-request-hook';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


export default function Login({show, handleClose}) {

    const {dispatch} = useContext(StateContext);
    const [ loginFailed, setLoginFailed ] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [ user, login ] = useResource((username, password) => ({
        url: `/auth/login`,
        method: 'post',
        data: { username, password } 
    }));

    useEffect(() => {
        if (user && user.isLoading === false && (user.data || user.error)) {
            if (user.error) {
                setLoginFailed(true);
                alert('failed');
            } else {
                setLoginFailed(false);
                console.log('UserId: ' + user.data.id);
                dispatch({ type: 'REGISTRATION', 'id': user.data.id, 'username': formData.username, access_token: user.data.access_token });
            }
        } 
    }, [user]);


    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={evt => { evt.preventDefault(); login(formData.username, formData.password); handleClose(); }}>

                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form.Label htmlFor="username-input">UserName:</Form.Label>
                    <Form.Control type="text" name="username-input" value={formData.username} onChange={evt => {setFormData({...formData, username: evt.target.value})}} placeholder="Username"/>
                    <br/>
                    <Form.Label htmlFor="password-input">Password:</Form.Label>
                    <Form.Control type="password" name="password-input" value={formData.password} onChange={evt => {setFormData({...formData, password: evt.target.value})}}placeholder="Password"/>
                    {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
                </Modal.Body>

                <Modal.Footer>
                    <Button className="secondary" onClick={handleClose}>Cancel</Button>
                    <Button className="primary" disabled={formData.username.length === 0} type="submit">Login</Button>
                </Modal.Footer>
            </Form>
        </Modal>


        
    );
    
}