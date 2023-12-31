/* .js file to establish the setup account functionality of my blog website */
/* Before a user can signin they need to create an account first */
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function AccountSetupModal() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const { login } = useAuth();
    
    const handleClose = () => setShow(false);
    const handleCreateAccount = () => setShow(true);
    
    async function handleCreateAccount() {
        await handleCreateAccount();
        history.push('/account');
    }
    
    return (
        <>
        <Button variant="outline-primary" onClick={handleShow}>
            Create an Account
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>Really? Are you sure?</Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="outline-primary" onClick={handleCreateAccount}>
                Create Account
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
    
}