import React from 'react';
import { FullPage } from './styled'
import { AuthUserContext, withAuthorization } from '../Session';
// import AuthUserContext and withAuthorization 
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
                        null
                    }

                </>

            )}
        </AuthUserContext.Consumer>
    </FullPage>

);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);