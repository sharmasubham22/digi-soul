import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const UserForm = (props) => {
    const [user, setUser] = useState({
        username: props.user ? props.user.username : '',
        description: props.user ? props.user.description : '',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { username, description} = user;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [username, description];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
        const value = `${field}`.trim();
        return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
        const user = {
            id: uuidv4(),
            username,
            description
        };
        props.handleOnSubmit(user);
        } else {
        errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
        ...prevState,
        [name]: value
        }));
    };
    
    return (
        
        <div className="main-form">
        <div>
        <div className="mb-1">
     Image <span className="font-css top">*</span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle"/>
     </div>
</div>
        </div>
        <h1>Edit blog</h1>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name">
            <Form.Label>User Name</Form.Label>
            <Form.Control
                className="input-control"
                type="text"
                name="username"
                value={username}
                placeholder="Enter name of user"
                onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group controlId="author">
            <Form.Label>Description</Form.Label>
            <Form.Control
                className="input-control"
                type="text"
                name="description"
                value={description}
                placeholder="Add description"
                onChange={handleInputChange}
            />
            </Form.Group>
            <Button variant="primary mt-3" type="submit" className="submit-btn" >
            Submit
            </Button>
        </Form>
        </div>
    );
};

export default UserForm;