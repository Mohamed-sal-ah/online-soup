import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTE from '../../constants/routes'
import { ReactComponent as Soup } from '../../images/Soup landing.svg'
import './style.css'

const LandingPage = () => {
    return (
        <div>
            <h1>Online Soup</h1>
            <Link to={ROUTE.USER_STATUS}>To soups</Link>
            <Soup />
        </div>
    )
}

export default LandingPage
