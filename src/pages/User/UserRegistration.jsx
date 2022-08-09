import { Container } from '@material-ui/core';
import React from 'react';
import UserRegistrationForm from '../../components/UserRegistrationForm';
import UsersTable from '../../components/UsersTable';


const UserRegistration = () => {
    return (
      <Container> 
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <h2>Cart Manage</h2>
        </div>
        <UserRegistrationForm />

        <UsersTable />
      </Container>
    );
}

export default UserRegistration;
