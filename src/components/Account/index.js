import React from 'react';
import Navigation from '../Navigation'


import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';

import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <>
    <Navigation />
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
            <h1>Account: {authUser.email}</h1>
            <PasswordForgetForm />
            <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
    </>
    
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);