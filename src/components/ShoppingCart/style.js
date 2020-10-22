import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const CartListUL = styled.ul`
width:100%;
display:flex;
justify-content:flex-start;
flex-direction:column;
padding:0;
margin:0;
:first-child{
   border-top-width:2px;
}
:last-child{
  border-bottom-width:2px;
}
`

export const CartItem = styled.li`
display:flex; 
flex-direction:column;
justify-content:space-between;
border-top:solid #CACACA;
border-bottom:solid #CACACA;
padding: 10px;
`

export const PriceAndNameDiv = styled.div`
display:flex; 
flex-direction:row;
justify-content:space-between;
align-items:center;
`

export const PriceText = styled.h3`
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

export const ExtraInfoDiv = styled.div`
display:flex; 
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
padding: 0 10px;
`

export const ExtraInfoText = styled.p`
font-family :  "Sansita";
margin:5px 0;
font-size:17px;
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

export const OtherPriceText = styled.p`
margin:0;
font-family: "Sansita";
font-size:17px;
`

export const TotalPriceText = styled.h6`
margin:0;
font-family: "Sansita";
font-size:25px;
`

export const ListItemButtons = styled.div`
display:flex; 
flex-direction:row-reverse;
justify-content:space-between;
align-items:center;
`

export const DeleteButton = styled.button`
font-family :  "Sansita";
color:red;
text-decoration:none;
font-size:27px;
background-color: #FFFFFF;
border:none;
padding:0;
margin:0;
cursor:pointer;
`
export const ChangeCartButton = styled(Link)`
font-family :  "Sansita";
color:#ffa070;
text-decoration:none;
font-size:27px;
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
cursor:pointer;
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