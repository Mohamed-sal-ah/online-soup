import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Add } from '../../icons/add.svg'
import { ReactComponent as Arrow } from '../../icons/arrow.svg'

const animteTranlateLeft = keyframes`
form {
    transform : translateX(0);
}
to {
    transform : translateX(100%);
}
`
const animteTranlateRight = keyframes`
form {
    transform : translateX(100%);
}
to {
    transform : translateX(0%);
}
`

export const FullPage = styled.div`
height:fit-content;
margin: 0;
z-index: -2;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
&.page {
    opacity:1;
}
&.fade-exit-active{
    animation: ${animteTranlateLeft} 1s linear 0.25s forwards;
}
&.fade-exit-done{
     transform : translateX(100%);
}
&.fade-enter-active{
    transform : translateX(100%);
    animation: ${animteTranlateRight} 1s linear forwards;
}
`

export const BackGroundImage = styled.div`
background:${props => props.BackImage};
background-size:cover;
/* background-color:green; */
width:100%;
height: fit-content;
`

export const BackgroundOpacity = styled.div`
background-color:rgba(0,0,0,0.5);
color:#FFFFFF;
display:flex;
flex-direction:column;
justify-content:space-between;
height:100vh;
min-height:600px;
`

export const TitleAndListDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
`

export const PriceAndNameDiv = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
width:100%;
padding:20px 0;
`

export const TitleHeader = styled.h1`
font-family: 'Sansita';
margin:0;
font-size:40px;
padding-left:10px;
font-weight: bold;
`

export const PriceHeader = styled.h1`
font-family: 'Sansita';
margin:0;
font-size:35px;
padding-right:10px;
`

export const ListDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-self: flex-start;
`

export const TitleList = styled.h4`
margin:0;
font-size:25px;
font-family: 'Sansita';
padding-left:20px;
padding-bottom:10px;
font-style:italic;
`

export const ListUL = styled.ul`
padding-left:30px;
display:flex;
flex-direction:column;
justify-content:flex-start;
margin:0;
padding-bottom:10px;
`

export const ListText = styled.p`
font-family: 'Sansita';
margin:0;
padding-bottom:10px;
font-size:20px;
font-style:italic;
font-weight: normal;
`

export const LinkItemDiv = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
width:100%;
padding-bottom: 10px;
`

export const AddLink = styled(Link)`
width:fit-content;
margin-right:28px;
height:fit-content;
`
export const AddSymbol = styled(Add)`
height:68px;
width:68px;
`
export const BackLink = styled(Link)`
width:fit-content;
margin-left:28px;
height:fit-content;
height:68px;
width:68px;
background-color: #FFFFFF;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;
`

export const BackArrow = styled(Arrow)`
height:30px;
width:30px;
`
