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

export const FriendsUL = styled.ul`
width:100%;
display:flex;
justify-content:flex-start;
flex-direction:column;
align-items:center;
padding:20px 0;
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
flex-direction:column;
justify-content:space-between;
background-color:#FFFFFF;
border-top:1px solid #CACACA;
border-bottom: 1px solid #CACACA;
border-left:2px solid #CACACA;
border-right:2px solid #CACACA;
padding: 10px;
box-sizing:border-box;
width:700px;
@media (max-width: 750px) { 
  width:100%;
border-left:none;
border-right:none;
}
`

export const PriceAndNameDiv = styled.div`
display:flex; 
flex-direction:row;
justify-content:space-between;
align-items:center;
`

export const AdressText = styled.h3`
font-family :  "Sansita";
margin:0; 
padding:20px 0;
font-size:27px;
color:#000000;
`
export const NameText = styled.h3`
font-family :  "Sansita";
margin:0; 
padding:20px 0;
font-size:27px;
color:#000000;
`

export const NameAndAdressText = styled.p`
font-family :  "Sansita";
margin:5px 0;
font-size:20px;
color:#000000;
`

export const TotalPricePriceDiv = styled.div`
width:100%;
display:flex;
justify-content:flex-start;
flex-direction:column;
`
export const PriceSectionDiv = styled.div`
display:flex; 
flex-direction:row;
justify-content:space-between;
align-items:center;
padding: 10px;
`

export const ListItemButtons = styled.div`
display:flex; 
flex-direction:row-reverse;
justify-content:space-between;
align-items:center;
`

export const ToggleMessaseButton = styled.button`
font-family :  "Sansita";
text-decoration:none;
font-size:17px;
background-color: #FFFFFF;
border:none;
padding:0;
margin:0;
cursor:pointer;
&:focus{
   outline:none;
}
`
export const SendWithoutMessageButtton = styled.button`
font-family :  "Sansita";
color:#ffa070;
text-decoration:none;
font-size:17px;
background-color: #FFFFFF;
border:none;
cursor:pointer;
`

export const SubmitInput = styled.button`
font-family :  "Sansita";
text-decoration:none;
font-size:17px;
background-color: #FFA070;
border:none;
cursor:pointer;
padding: 10px;
color:#FFFFFF;
`

export const InputDiv = styled.div`
display:flex; 
flex-direction:row;
justify-content:space-between;
align-items:center;
border: 2px solid #FFA070;
`

export const StyledInputForm = styled.input`
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
justify-content:center;
margin-bottom: 20px;
@media (max-width: 750px) {
   background-color: #FFA070;
   margin:0;
}
`

export const SendButton = styled.button`
cursor:pointer;
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
width:300px;
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

export const StyledForm = styled.form`
display:flex;
flex-direction:row;
justify-content:center;
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

export const AccountLink = styled(Link)`
font-size:25px;
font-family :  "Sansita";
text-decoration:none;
color:#FFA070;
margin: 0 5px;
`

export const InputDivForm = styled.div`
margin: 0 10px;
display:flex; 
flex-direction:row;
justify-content:space-between;
align-items:center;
padding: 2px;
border: 2px solid #FFA070;
`

export const SubmitInputForm = styled.button`
font-family :  "Sansita";
text-decoration:none;
font-size:20px;
background-color: #FFFFFF;
border:2px solid #FFA070;
padding:5px;
cursor:pointer;
margin-right:10px;
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