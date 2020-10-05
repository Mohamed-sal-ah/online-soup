import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import Account from './account';

const AccountPage = () => (
    <>
        <AuthUserContext.Consumer>
            {authUser => (
                <>
                    {authUser !== 'loading' ?
                        <Account authUser={authUser} /> :
                        <p>Loading...</p>
                    }

                </>

            )}
        </AuthUserContext.Consumer>
    </>

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);