import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import UserPayPage from './userPay';

const UserPay = () => (
    <>
        <AuthUserContext.Consumer>
            {authUser => (
                <>
                    {authUser !== 'loading' ?
                        <UserPayPage authUser={authUser} /> :
                        <p>Loading...</p>
                    }

                </>

            )}
        </AuthUserContext.Consumer>
    </>

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(UserPay);