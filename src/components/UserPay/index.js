import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { FullPage } from './style';
import UserPayPage from './userPay';

const UserPay = () => (
    <FullPage className="page">
        <AuthUserContext.Consumer>
            {authUser => (
                <>
                    {authUser !== 'loading' ?
                        <UserPayPage authUser={authUser} /> :
                        null
                    }

                </>

            )}
        </AuthUserContext.Consumer>
    </FullPage>

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(UserPay);