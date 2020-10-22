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

export const AllInfoDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
height:100%;
width:100%;
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
background-color: #FFA070;
justify-content:center;
`

export const BackButton = styled.button`
cursor:pointer;
padding: 20px 5vw;
border: none;
letter-spacing:0;
border-left:4px solid #FFFFFF;
border-right:4px solid #FFFFFF;
font-size: 25px;
font-family :  "Sansita";
box-shadow:none;
background-color :#FFA070;
text-decoration:none;
text-align:center;
color: #FFFFFF;
width:70%;
&:focus{
   outline:none;
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
border-top:solid #FFA070;
border-bottom:solid #FFA070;
padding: 5px 0;
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
justify-content:flex-start;
align-items:center;
width:100%;
`

export const PriceText = styled.p`
font-family :  "Sansita";
margin:0;
padding: 5px 10px;
font-size:20px;
color:#000000;
`
export const PaymentSummary = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
`