import React from 'react';
import { compose } from 'recompose'
import AdminPage from './admin'
import { withFirebase } from '../Firebase';
import { withAuthorization, AuthUserContext } from '../Session';

const Admin = () => (
    <>
        <AuthUserContext.Consumer>
            {authUser => (
                <>
                    {authUser !== 'loading' ?
                        <AdminPage authUser={authUser} /> :
                        <p>Loading...</p>
                    }

                </>

            )}
        </AuthUserContext.Consumer>
    </>

)
const condition = authUser =>
    authUser && !!authUser.roles;
export default compose(
    withAuthorization(condition),
    withFirebase,
)(Admin);
