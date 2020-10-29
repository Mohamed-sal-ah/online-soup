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
& > * {
   width:700px;
}
@media (max-width: 750px) { 
   & > * {
      width:100%;
   }
}
`

export const TitlePage = styled.h1`
font-family :  "Sansita";
text-align: center;
font-size: 40px;
`
export const AdminLink = styled(Link)`
font-family: 'Sansita';
cursor:pointer;
width:fit-content;
text-decoration:none;
font-size:25px;
color:#ce461b;
margin-left: 10px;
`

export const UserInfoAndSignoutButton = styled.div`
display:flex; 
flex-direction:row;
align-items:center;
justify-content:space-between;
`


export const UserInfoFlex = styled.div`
display:flex; 
flex-direction:column;
align-items:flex-start;
margin-left:10px;
`
export const UserInfoText = styled.h4`
font-family :  "Sansita";
margin:5px 0;
font-size:20px;
color:#000000;
`
export const FormAndULDiv = styled.div`
display:flex; 
flex-direction:column;
justify-content:space-between;
align-items:center;
`

export const SubmitInput = styled.button`
font-family :  "Sansita";
text-decoration:none;
font-size:20px;
background-color: #FFFFFF;
border:2px solid #FFA070;
padding:5px;
cursor:pointer;
margin-right:10px;
`

export const InputDiv = styled.div`
margin: 0 10px;
display:flex; 
flex-direction:row;
justify-content:space-between;
align-items:center;
border: 2px solid #FFA070;
padding: 2px;
`

export const StyledInput = styled.input`
font-family :  "Sansita";
padding: 5px;
align-self: center;
font-style:italic;
border:none;
color:#666666;
background-color:#ffffff;
font-size:17px;
&::placeholder{
    color:#cccccc;
}
&:focus{
   outline:none;
}
`

export const FormTitle = styled.h5`
font-family :  "Sansita";
margin:0;
font-size: 25px;
`

export const StyledForm = styled.form`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:100%;
padding:20px 0;
`
export const InputFlex = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
`



export const FriendsUL = styled.ul`
width:100%;
display:flex;
justify-content:flex-start;
flex-direction:column;
padding:20px 0;
margin:0;
& li:first-of-type{
   border-top-width: 2px;
}
& li:last-of-type{
  border-bottom-width:2px;
}
justify-content:center;
@media (max-width: 750px) { 
width:100%;
}
`

export const ItemUL = styled.li`
display:flex; 
flex-direction:row;
align-items:center;
justify-content:space-between;
border-top:1px solid #CACACA;
border-bottom: 1px solid #CACACA;
background-color:#FFFFFF;
box-sizing:border-box;
border-left: 2px solid  #CACACA; 
border-right: 2px solid  #CACACA;  
@media (max-width: 750px) { 
border-left:none;
border-right:none;
}
padding: 10px;
`

export const AdressAndTextDiv = styled.div`
display:flex; 
flex-direction:column;
align-items:flex-start;
`
export const SmallInfoText = styled.p`
font-family :  "Sansita";
margin:5px 0;
font-size:20px;
color:#000000;
`

export const DeleteButton = styled.button`
font-family :  "Sansita";
color:red;
text-decoration:none;
font-size:20px;
background-color: #FFFFFF;
border:none;
padding:0;
margin:0;
cursor:pointer;
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
cursor:pointer;
padding: 20px 5vw;
border: none;
letter-spacing:0;
border-left:4px solid #FFFFFF;
border-right:4px solid #FFFFFF;
font-size: 25px;
font-family :  "Sansita";
box-shadow:none;
background-color:#FFA070;
text-decoration:none;
text-align:center;
color: #FFFFFF;
border-radius: 20px;
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

