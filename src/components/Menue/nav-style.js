import styled from 'styled-components'
import { ReactComponent as ShoppingCart } from '../../icons/shopping-cart.svg'
import { ReactComponent as AccountLogo } from '../../icons/account.svg'

import { Link } from 'react-router-dom'

export const TopNav = styled.nav`
display:flex; 
flex-direction: row;
justify-content:space-between;
width:100%;
padding-top:30px;
`

export const TopNavDivCenter = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:55%;
`
export const AccountSymbol = styled(AccountLogo)`
width:30px;
height:30px;
`

export const AccountLink = styled(Link)`
    margin-right: 10px;
padding:10px;
border-radius:100%;
background-color:#F5F5F5;
height:50px;
width:50px;
display:flex;
justify-content:center;
align-items:center;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
`

export const SoupButton = styled(Link)`
height:fit-content;
width: fit-content;
margin-left:10px;
`

export const SoupButtonLogo = styled.img`
width:60px;
height:60px;
`

export const ShoppingCartLink = styled(Link)`
color: black;
text-decoration: none;
`

export const ShoppingCartDiv = styled.div`
width:fit-content;
height:fit-content;
display:flex;
flex-direction:row;
margin-right: 10px;
cursor:pointer;
`

export const CartNumber = styled.p`
font-family: 'Sansita';
margin:0;
background-color:#FFA070;
width:30px;
height:30px;
font-size: 20px;
border-radius:100%;
display: flex;
justify-content: center;
align-items: center;
color:#FFFFFF;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
margin-left: -20px;
margin-top: -10px;
`

export const ShoppingCartSymbolSpan = styled.span`
padding:10px;
border-radius:100%;
background-color:#F5F5F5;
height:50px;
width:50px;
display:flex;
justify-content:center;
align-items:center;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
`

export const ShoppingCartSymbol = styled(ShoppingCart)`
width:30px;
height:30px;
`