import React from 'react';
import UserForm from './UserForm';
import { Container } from '@material-ui/core';

const AddUser = ({ history, users, setUsers }) => {
    const handleOnSubmit = (user) => {
        setUsers([...users, user]);
        history.push('/');
    };

    return (
        <Container maxWidth="sm">
            <UserForm handleOnSubmit={handleOnSubmit} />
        </Container>
    );
};

export default AddUser;
