import React from 'react'
import { Link } from 'react-router-dom'
import { ADMIN } from '../../constants/roles'
import { ACCOUT_PAGE, ADMIN_PAGE } from '../../constants/routes'
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

                                <p>{authUser.username}</p>
                                {authUser.roles && authUser.roles.ADMIN ?
                                    <Link to={ADMIN_PAGE}>To Admin</Link> : null}
                                <Link to={ACCOUT_PAGE} >Account</Link>
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
