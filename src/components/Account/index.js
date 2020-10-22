import React from 'react';
import { FullPage } from './styled'
import { AuthUserContext, withAuthorization } from '../Session';
import Account from './account';

const AccountPage = () => (
    <FullPage className="page">
        <AuthUserContext.Consumer>
            {authUser => (
                <>
                    {authUser !== 'loading' ?
                        <>
                            {authUser ? <>
                                <Account authUser={authUser} />
                            </> : null}
                        </> :
                        <p>Loading...</p>
                    }

                </>

            )}
        </AuthUserContext.Consumer>
    </FullPage>

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);