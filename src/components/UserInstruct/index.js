
import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import UserInstructPage from './userInstuct';

const UserPay = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <>
                {authUser !== 'loading' ?
                    <UserInstructPage authUser={authUser} /> :
                    <p>Loading...</p>
                }

            </>

        )}
    </AuthUserContext.Consumer>

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(UserPay);
