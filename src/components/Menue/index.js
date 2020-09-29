import React from 'react'
import { Link } from 'react-router-dom'
import { LANDING } from '../../constants/routes'
import MenueItems from './menue-items'
import MenueNav from './nav'
//fff
const MenuePage = () => {
    return (
        <div>
            <MenueNav />
            <p>Alla Soppor</p>
            <Link to={LANDING}>Back</Link>
            <MenueItems />
        </div>
    )
}

export default MenuePage
