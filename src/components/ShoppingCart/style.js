import styled from 'styled-components'
import Plus from '../../icons/plus.svg'
import Minus from '../../icons/minus.svg'
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
width: 700px;
display:flex;
box-sizing: border-box;
justify-content:flex-start;
flex-direction:column;
padding:0;
margin:0;
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

export const CartItem = styled.li`
display:flex; 
flex-direction:column;
justify-content:space-between;
border-top:1px solid #CACACA;
border-bottom:1px solid #CACACA;
padding: 10px;
background-color:#FFFFFF;
border-left: 2px solid  #CACACA; 
border-right: 2px solid  #CACACA;  
@media (max-width: 750px) { 
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

export const NameText = styled.h3`
font-family :  "Sansita";
margin:0; 
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
width:700px;
display:flex;
margin: 20px 0;
box-sizing: border-box;
background-color:#FFFFFF;
justify-content:flex-start;
flex-direction:column;
border: 2px solid  #CACACA;  
@media (max-width: 750px) { 
  width:100%;
border-left:none;
border-right:none;
}
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

export const PriceText = styled.h3`
font-family :  "Sansita";
margin:0; 
padding:0;
font-size:27px;
color:#000000;
`

export const PriceButtonDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width: 40%;
`

export const ButtonAndValueDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-right:10px;
`

export const ButtonStyle = styled.button`
background-color:#FFFFFF;
z-index:2;
margin:0;
padding:0px;
width:fit-content;
height:fit-content;
border:none;
display:flex;
align-items:center;
justify-content:center;
opacity:0.8;
:disabled{
opacity:0.5;
}
`
export const PlusSign = styled(ButtonStyle)`
background:url(${Plus}) center no-repeat;
background-size: 100%;
width:30px;
height:30px;
`
export const MinusSign = styled(ButtonStyle)`
background:url(${Minus}) center no-repeat;
background-size: 100%;
width:30px;
height:30px;
`
export const AmountNumber = styled.p`
font-family :  "Sansita";
font-size:20px;
width:40px;
margin:5px 10px;
border:2px solid #CACACA;
text-align:center;
`

export const TotalPriceText = styled.h6`
margin:0;
font-family: "Sansita";
font-size:25px;
`

export const ListItemButtons = styled.div`
display:flex; 
flex-direction:row;
justify-content:space-between;
align-items:center;
padding-top:20px;
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
background-color: #FFA070;
border: none;
border-left:2px solid #FFFFFF;
font-size: 25px;
color: #FFFFFF;
height:100%;
cursor:pointer;
`

export const BackButton = styled.button`
font-family :  "Sansita";
background-color: #FFA070;
border: none;
border-right:2px solid #FFFFFF;
font-size: 25px;
color: #FFFFFF;
text-decoration:none;
text-align:center;
cursor:pointer;
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