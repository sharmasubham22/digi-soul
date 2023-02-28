import React from 'react';
import UserForm from './UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
    
const AddUser = ({ history, users, setUsers }) => {
    const handleOnSubmit = (user) => {
        setUsers([...users, user]);
        history.push('/');
    };

    return (
        <React.Fragment>
        <UserForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddUser;