import React from 'react'
import ShoppingCartPage from './shopping-cart'
import { AuthUserContext } from '../Session'
const ShoppingCart = ({ authUser }) => {
    return (
        <AuthUserContext.Consumer>
            { authUser =>
                authUser !== 'loading' ?
                    <ShoppingCartPage /> : null
            }

        </AuthUserContext.Consumer>
    )
}

export default ShoppingCart
