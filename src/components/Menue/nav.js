import React from 'react'
import { ACCOUT_PAGE, LANDING, SHOPPING_CART } from '../../constants/routes'
import SoupLogo from '../../images/soup-logo.jpg'
import * as STYLED from './nav-style'
import { AuthUserContext } from '../Session'
const MenueNav = ({ cartArr }) => (
    <STYLED.TopNav>
        <STYLED.SoupButton to={LANDING}>
            <STYLED.SoupButtonLogo src={SoupLogo} />
        </STYLED.SoupButton>

        <AuthUserContext.Consumer>
            {authUser =>
                authUser !== 'loading' ?
                    <>
                        {authUser ?
                            <>
                                <STYLED.AccountLink to={ACCOUT_PAGE} >
                                    <STYLED.AccountSymbol />
                                </STYLED.AccountLink>
                            </>
                            : null}
                    </>
                    : <p>Loading...</p>

            }
        </AuthUserContext.Consumer>
        {cartArr.length > 0 ?
            <STYLED.ShoppingCartLink to={SHOPPING_CART}>
                <STYLED.ShoppingCartDiv>
                    <STYLED.ShoppingCartSymbolSpan>
                        <STYLED.ShoppingCartSymbol />
                    </STYLED.ShoppingCartSymbolSpan>
                    <STYLED.CartNumber>
                        {cartArr.length}
                    </STYLED.CartNumber>
                </STYLED.ShoppingCartDiv>
            </STYLED.ShoppingCartLink>
            : null}

    </STYLED.TopNav>
)




export default MenueNav
