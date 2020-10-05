import React, { Component } from 'react'
import * as ROUTE from '../../constants/routes'
import { Link } from 'react-router-dom'
export class UserStatus extends Component {
    render() {
        return (
            <div>
                <Link to={ROUTE.GUEST}>Continue as Guest</Link>
                <Link to={ROUTE.SIGN_IN}>Sign in</Link>
                <Link to={ROUTE.SIGN_UP}>Sign up</Link>
            </div>
        )
    }
}

export default UserStatus
