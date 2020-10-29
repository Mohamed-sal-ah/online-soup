import { AuthUserContext } from '../Session';
import UserStatusPage from './userStatus'
import React from 'react'
const UserStatus = ({ authUser }) => {
    return (
        <AuthUserContext.Consumer>
            {authUser => (
                <>
                    {authUser !== 'loading' ?
                        <UserStatusPage user={authUser} /> : null
                    }
                </>
            )}

        </AuthUserContext.Consumer>
    )
}

export default UserStatus
