import React from 'react';
import { compose } from 'recompose'
import AdminPage from './admin'
import { withFirebase } from '../Firebase';
import { withAuthorization, AuthUserContext } from '../Session';
import { FullPage } from './styled';

const Admin = () => (
    <FullPage className="page">
        <AuthUserContext.Consumer>
            {authUser => (
                <>
                    {authUser !== 'loading' ?
                        <AdminPage authUser={authUser} /> :
                        null
                    }

                </>

            )}
        </AuthUserContext.Consumer>
    </FullPage>

)
const condition = authUser =>
    authUser && !!authUser.roles;
export default compose(
    withAuthorization(condition),
    withFirebase,
)(Admin);
