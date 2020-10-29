import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FullPage = styled.div`
height:100%;
overflow:auto;

margin: 0;
z-index: -2;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

export const TitlePage = styled.h1`
font-family :  "Sansita";
align-self:center;
text-align: center;
font-size: 40px;
`

export const SubTitle = styled.h3`
font-family :  "Sansita";
font-size: 27px;
margin:0;
`

export const SubTitleAndUserList = styled.section`
display:flex;
flex-direction:column;
justify-content:space-between; 
align-items:center;
width:100%;
`

export const UserListUL = styled.ul`
padding:20px 0;
width: 700px;
display:flex;
justify-content:flex-start;
flex-direction:column;
margin:0;
align-items:center;
& li:first-child{
   border-top-width:2px;
}
& li:last-child{
  border-bottom-width:2px;
}
justify-content:center;
@media (max-width: 750px) { 
width:100%;
}
`

export const UserItem = styled.li`
box-sizing:border-box;
display:flex; 
flex-direction:column;
justify-content:space-between;
background-color:#FFFFFF;
border-top:1px solid #CACACA;
border-bottom: 1px solid #CACACA;
border-left:2px solid #CACACA;
border-right:2px solid #CACACA;
padding: 10px;
width:700px;
@media (max-width: 750px) { 
width:100%;
border-left:none;
border-right:none;
}
`

export const UserInfoDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`

export const UserInfoAndButtonDiv = styled.div`
display:flex; 
flex-direction:row;
justify-content:space-between;
`

export const ToggleUserInfoButton = styled.button`
font-family :  "Sansita";
text-decoration:none;
font-size:27px;
background-color: #FFFFFF;
border:none;
padding:0;
margin:0;
cursor:pointer;
:focus{
outline:none;
}
`

export const OrderHistoryUL = styled.ul`
padding:0;
margin:0;
list-style-type:none;
padding-top:10px;
`

export const OrderHistoryItem = styled.li`
display:flex; 
flex-direction:column;
justify-content:space-between;
padding:10px 0;
`

export const OrderTitle = styled.h4`
font-family : "Montserrat";
font-weight:normal;
font-size: 23px;
margin:0;
`

export const CartTitle = styled.h5`
font-family : "Montserrat";
font-weight:normal;
font-size: 18px;
margin-bottom:0;
margin-top:10px;
`

export const StrongFont = styled.strong`
font-family : "Montserrat-Bold";
`

export const TextInfo = styled.span`
font-family : "Montserrat";

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
border:none;
border-radius: 20px;
font-size: 25px;
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