import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FullPage = styled.div`
height:100%;

overflow:hidden;
margin: 0;
z-index: -2;
display:flex;
flex-direction:column;
justify-content:flex-start;
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
justify-content: center;
@media (max-width:750px){
   justify-content:space-between;
}
`

export const ThreeButtonsDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
height: 60vh;
justify-content: space-evenly;
`

export const ButtonLinks = styled.button`
border:none;
cursor:pointer;
text-decoration:none;
background-color :#FFA070;
color: #FFFFFF;
width:500px;
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

export const CardLink = styled(Link)`
border:none;
text-decoration:none;
background-color :#FFA070;
color: #FFFFFF;
width:500px;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
font-size:30px;
letter-spacing: 0.5px;
text-align:center;
padding :10px 0;
font-family :  "Sansita";
&:focus{
   outline:none;
}
@media (max-width:750px){
   width:70%;
}
`



export const DivButton = styled.div`
width:100%;
display:flex;
justify-content:center;
margin-bottom: 20px;
@media (max-width: 750px) {
   background-color: #FFA070;
   margin:0;
}
`

export const BackButton = styled(Link)`
padding: 20px 5vw;
border: none;
letter-spacing:0;
font-size: 25px;
border-radius: 20px;
font-family :  "Sansita";
box-shadow:none;
background-color :#FFA070;
text-decoration:none;
text-align:center;
color: #FFFFFF;
width:250px;
&:focus{
   outline:none;
}
@media (max-width: 750px) {
width:70%;
border-radius:0;
border-left:4px solid #FFFFFF;
border-right:4px solid #FFFFFF;
}
`