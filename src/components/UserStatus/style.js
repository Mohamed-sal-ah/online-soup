import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FullPage = styled.div`
height:fit-content;
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

export const SubTitleText = styled.h3`
font-family :  "Sansita";
align-self:flex-start;
text-align: center;
align-self:center;
width:80%;
font-weight: normal;
font-size: 20px;
`

export const AllButtonDiv = styled.div`
display:flex;
width:100%;
flex-direction:column;
height:100%;
justify-content: center;
@media (max-width:750px){
   justify-content:space-between;
}
`

export const ButtonLinks = styled(Link)`
text-decoration:none;
background-color :#FFA070;
width:500px;
color: #FFFFFF;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
font-size:30px;
letter-spacing: 0.5px;
text-align:center;
padding :10px 15px;
font-family :  "Sansita";
&:focus{
   outline:none;
}
@media (max-width:750px){
   width:70%;
}
`

export const DesktopGuestButton = styled(ButtonLinks)`
display:block;
@media (max-width: 750px) { 
   display:none;
}
`

export const GuestButton = styled(ButtonLinks)`
padding: 20px 5vw;
border: none;
letter-spacing:0;
border-left:2px solid #FFFFFF;
font-size: 25px;
box-shadow:none;
&:focus{
   outline:none;
}
`
export const DivButton = styled.div`
width:100%;
display:flex;
justify-content:space-around;
height:fit-content;
margin-bottom: 20px;
  & > * {
   width: fit-content;
   padding: 13px 20px;
   border-radius: 20px;
   width:250px;
   display: flex;
   align-items: center;
   justify-content: center;
  }
@media (max-width: 750px) { 
  margin:0;
  justify-content:space-between;
  background-color: #FFA070;
  & > * {
      padding: 20px 0;
      width:100%;
      border-radius:0;
  }
}
`
export const BackButton = styled(Link)`
font-family :  "Sansita";
padding: 20px 0;
background-color: #FFA070;
border: none;
border-right:2px solid #FFFFFF;
font-size: 25px;
color: #FFFFFF;
text-decoration:none;
text-align:center;
`

export const TwoButtonsDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
height: 60vh;
justify-content: space-evenly;
`