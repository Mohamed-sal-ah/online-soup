import React from 'react'
import { AuthUserContext } from '../Session'
import SignOutButton from '../SignOut'

const MenueNav = ({ authUser }) => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser !== 'loading' ?
                    <>
                        {authUser ?
                            <div>
                                {console.log(authUser)}
                                <p>{authUser.username}</p>
                                <SignOutButton />
                            </div>
                            : <p>Not Signed in</p>}
                    </>
                    : <p>Loading...</p>

            }

        </AuthUserContext.Consumer>
    </div>
)




export default MenueNav
