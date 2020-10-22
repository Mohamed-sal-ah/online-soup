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

export const InputDiv = styled.div`
display:flex;
width:100%;
flex-direction:column;
height:100%;
justify-content:space-between;
`

export const StyledInput = styled.input`
font-family :  "Sansita";
padding: 5px;
border: 2px solid #FFA070;
width: 90%;
align-self: center;
font-style:italic;
color:#666666;
background-color:#ffffff;
font-size:20px;
&::placeholder{
    color:#cccccc;
}
&:focus{
   outline:none;
}
`
export const SubmitButton = styled.button`
font-family :  "Sansita";
padding: 20px 0;
background-color: #FFA070;
border: none;
border-left:2px solid #FFFFFF;
font-size: 25px;
color: #FFFFFF;
height:100%;
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

export const DivButton = styled.div`
width:100%;
display:flex;
background-color: #FFA070;
justify-content:space-between;
height:fit-content;
& > * {
    width:100%;
}
`