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
export const FormStyled = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
height: 100%;
width: 100%;
`
export const InputDiv = styled.div`
display:flex;
flex-direction:column;
height:100%;
justify-content:flex-start;
width:700px;
@media (max-width: 750px) { 
    width:100%;
}
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
margin-bottom: 30px;
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