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
align-self:flex-start;
text-align: center;
width:100%;
font-size: 40px;
`

export const UserInfoAndSignoutButton = styled.div`
display:flex; 
flex-direction:row;
align-items:center;
justify-content:space-between;
width:100%;
`

export const UserInfoText = styled.h4`
font-family :  "Sansita";
margin:5px 0;
font-size:20px;
color:#000000;
`

export const UserInfoFlex = styled.div`
display:flex; 
flex-direction:column;
align-items:flex-start;
margin-left:10px;
`

export const SignOutButtonStyle = styled.button`
margin-right:10px;
font-family :  "Sansita";
text-decoration:none;
font-size:20px;
background-color: #FFFFFF;
border:none;
padding:10px;
border:2px solid #000000;
cursor:pointer;
`

export const FriendsUL = styled.ul`
width:100%;
display:flex;
justify-content:flex-start;
flex-direction:column;
padding:0;
margin:0;
& li:first-of-type{
   border-top-width: 2px;
}
& li:last-of-type{
  border-bottom-width:2px;
}
`

export const ItemUL = styled.li`
display:flex; 
flex-direction:row;
align-items:center;
justify-content:space-between;
border-top:1px solid #CACACA;
border-bottom: 1px solid #CACACA;
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


export const FormAndULDiv = styled.div`
width:100%;
display:flex; 
flex-direction:column;
justify-content:space-between;
align-items:center;
`

export const StyledForm = styled.form`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
padding:20px 0;
`

export const FormTitle = styled.h5`
font-family :  "Sansita";
margin:0;
font-size: 25px;
`


export const InputFlex = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
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


export const DivButton = styled.div`
width:100%;
display:flex;
background-color: #FFA070;
justify-content:center;
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
width:70%;
&:focus{
   outline:none;
}
`


export const AdminLink = styled.a`
padding:10px;
border-radius:100%;
background-color:#F5F5F5;
height:50px;
width:50px;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Sansita';
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
`