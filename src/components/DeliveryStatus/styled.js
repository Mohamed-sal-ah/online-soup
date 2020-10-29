import styled, { keyframes } from 'styled-components'
import { ReactComponent as Arrow } from '../../icons/down-arrow.svg'
import { ReactComponent as Cupon } from '../../images/kupong.svg'

export const FullPage = styled.div`
height:fit-content;
overflow:auto;
margin: 0;
z-index: -2;

display:flex;
flex-direction:column;
height:100%;
justify-content:space-between;
align-items:center;
`

export const AllInfoDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
height:100%;
width:700px;
padding: 20px 0px;
@media (max-width: 750px) {
   width:100%;
}
`

export const TitlePage = styled.h1`
font-family :  "Sansita";
align-self:flex-start;
text-align: center;
width:100%;
font-size: 40px;
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

export const BackButton = styled.button`
cursor:pointer;
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

export const StatusDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:100%;
`

export const StatusTitle = styled.h4`
font-family :  "Sansita";
margin:0; 
padding:5px;
font-size:20px;
font-style:italic;
margin-left:10px;
color:#000000;
`

export const StatusText = styled.h3`
font-family :  "Sansita";
margin:0; 
padding:5px;
font-size:25px;
margin-left:10px;
color:#ff9159;
`

export const DeliveryTitle = styled.h3`
font-family :  "Sansita";
margin:0; 
padding:5px;
font-size:25px;
margin-left:10px;
color:#000000;
`

export const DeliveryAdressDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:100%;
`

export const AdressDiv = styled.div`
width:100%;
display:flex; 
flex-direction:column;
justify-content:space-between;
box-sizing:border-box;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
border:3px solid #FFA070;
@media (max-width: 750px) {
   border-left:none;
   border-right:none;
   box-shadow: none;
}
padding: 5px;
`
export const NameAndPriceText = styled.p`
font-family :  "Sansita";
margin:0;
padding: 5px 10px;
font-size:20px;
color:#000000;
`

export const PriceTotalDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:100%;
`

export const ToggleButton = styled.button`
border:none;
background-color:#FFFCFB;
padding:0;
margin:0;
margin-right: 10px;
:focus{
   outline:none;
}
`

export const ArrowSymbol = styled(Arrow)`
fill: #FFA070;
width: 35px;
height: 35px;
`

export const PriceText = styled.p`
font-family :  "Sansita";
margin-left:10px;
margin-top:0;
margin-bottom:0;
margin-right:0;
font-size:20px;
color:#000000;
`

export const ExtraPriceInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
width:100%;
`

export const PaymentSummary = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
margin: 20px 0;
padding: 10px 0;
align-items:center;
box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
border:3px solid #FFA070;
@media (max-width: 750px) {
   border-left:none;
   border-right:none;
   box-shadow: none;
}
`

export const SoupRewardOuter = styled.div`
width: 600px;
align-self: center;
margin:20px 0;
display: flex;
align-items: center;
justify-content: center;
`

const appearSoup = keyframes`
from{
   opacity: 0;
}
to {
   opacity:1;
}
`

export const RewardCupong = styled(Cupon)`
width: 400px;
height: 150px;
& > g > #soup1{
   opacity:0;
   animation: ${appearSoup} 5s 1 3s forwards;
}
& > g > #soup2{
   opacity:0; 
}
& > g > #soup3{
   opacity:0;
}
& > g > #soup4{
   opacity:0;
}
& > g > #soup5{
   opacity:0;
}
& > g > #soup6{
   opacity:0;
}
`
