import styled, { keyframes } from "styled-components";
import { ReactComponent as Info } from '../../icons/info.svg'
import { ReactComponent as Add } from '../../icons/add.svg'
import { Link } from "react-router-dom";

export const ListItem = styled.li`
margin:0;
display: flex;
flex-direction: column;
align-items: center;
background: ${props => props.BackImage};
background-size: cover;
height:500px;
justify-content:space-between;
width:100%;
@media (max-width: 750px) { 
margin: 20px 0;
}
`

export const TitlePriceTextDiv = styled.div`
display:flex;
flex-direction:row;
width: 100%;
align-items: center;
justify-content: space-between;
color:#FFFFFF;
background-color:rgba(0,0,0,0.5);
`

export const TitleAndDetailsDiv = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
padding-left:20px;
`

export const ListDetails = styled.h6`
    font-family: 'Sansita';
    font-size: 20px;
    margin:0;
    padding-bottom:10px;
    font-weight:100;
`
export const ListTitle = styled.h3`
    font-family: 'Sansita';
    font-size: 30px;
    margin:0;
    padding:10px 0;
`

export const PriceText = styled.h3`
    font-family: 'Sansita';
    font-size: 30px;
    padding-right:20px;
    margin:0;
`

export const LinkItemDiv = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
width:100%;
padding-bottom: 10px;
`

export const InfoLink = styled(Link)`
margin-left: 28px;
`

export const InfoSymbol = styled(Info)`
fill:#FFFFFF;
height:60px;
width:60px;
`

const CartNumberAppear = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`
export const CartNumbers = styled.h6`
font-family: 'Sansita';
opacity:0;
animation: ${CartNumberAppear} 1s linear 1s forwards;
margin:0;
background-color:#417301;
width:30px;
height:30px;
font-size: 20px;
border-radius:100%;
display: flex;
justify-content: center;
align-items: center;
color:#FFFFFF;
margin-left: -12px;
margin-top:-10px;
`
export const CartAndAddSpan = styled.span`
width:fit-content;
height:fit-content;
display:flex;
flex-direction:row;
`

export const AddLink = styled(Link)`
width:fit-content;
height:fit-content;
`
export const AddSymbol = styled(Add)`
height:60px;
width:60px;
`