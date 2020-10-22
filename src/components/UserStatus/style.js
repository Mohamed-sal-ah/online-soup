import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FullPage = styled.div`
height:100%;
overflow:hidden;
margin: 0;
z-index: -2;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
`
export const TitlePage = styled.h1`
font-family :  "Sansita";
align-self:flex-start;
text-align: center;
width:100%;
font-size: 40px;
`

export const AllButtonDiv = styled.div`
display:flex;
width:100%;
flex-direction:column;
height:100%;
justify-content:space-between;
`

export const ButtonLinks = styled(Link)`
text-decoration:none;
background-color :#FFA070;
color: #FFFFFF;
width:70%;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
font-size:30px;
letter-spacing: 0.5px;
text-align:center;
padding :10px 15px;
font-family :  "Sansita";
&:focus{
   outline:none;
}
`
export const DivButton = styled.div`
width:100%;
display:flex;
background-color: #FFA070;
justify-content:center;
`

export const GuestButton = styled(ButtonLinks)`
padding: 20px 5vw;
border: none;
letter-spacing:0;
border-left:4px solid #FFFFFF;
border-right:4px solid #FFFFFF;
font-size: 25px;
box-shadow:none;
&:focus{
   outline:none;
}
`

export const TwoButtonsDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
height: 60vh;
justify-content: space-evenly;
`