import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as LargeBg } from '../../images/large-bg.svg'
import { ReactComponent as Soup } from '../../images/Soup landing.svg'
// import CSSTransitionGroup from 'react-transition-group';

const animteTranlateUp = keyframes`
form {
    transform : translateY(0);
}
to {
    transform : translateY(-100%);
}
`
const animteTranlateDown = keyframes`
form {
    transform : translateY(-100%);
}
to {
    transform : translateY(0%);
}
`

export const FullPage = styled.div`
height:100%;
overflow:hidden;
margin: 0;
z-index: -2;
@media (max-width: 750px) { 
&.page {
    opacity:1;
}
&.fade-exit-active{
    animation: ${animteTranlateUp} 1s linear forwards;
}
&.fade-exit-done{
     transform : translateY(-100%);
}
&.fade-enter-active{
    transform : translateY(-100%);
    animation: ${animteTranlateDown} 1s linear 1s forwards;
}
}
`

const soupUp = keyframes`
    from { 
        opacity: 0;
        transform:translateY(40px) scale(0.5,0.1);
    }
    to {
        transform: translateY(0) scale(1,1);
        opacity: 1;
    }
`
const spoonUp = keyframes`
    from {transform: rotate(20deg);}
    to {transform: rotate(0);}
`

export const SoupStyle = styled(Soup)`
margin-bottom: 50px;
@media (max-width: 750px) { 
    margin-left:0;
    margin-right:25px;
    margin-bottom: 0;
  margin-top: -22vh;  
}
& > g > #spoon {
    transform: rotate(20deg);
    transform-origin:center;
    transform-box: fill-box;
    animation: ${spoonUp} 5s 1 2s forwards;
    transition: ease-in-out;
}
& > g > #soup {
    opacity: 0;
    transform:translateY(40px) scale(0.5,0.1);
    transform-origin: center;
    transform-box: fill-box;
    animation: ${soupUp} 5s 1 2s forwards;
    transition: ease-in-out;
}
`
export const PageSection = styled.section`
display: flex;
flex-direction: row-reverse;
justify-content: space-around;
align-items: center;
height:100%;
z-index:1;
@media (max-width: 750px) { 
    flex-direction:column;
}
`
export const TwoSideSection = styled.article`
display : flex; 
justify-content :center;
align-items: center;
width:50%;
height: 100%;
flex-direction:column;
@media (max-width: 750px) { 
    height:50%;
    width:100%;
}
`
export const LeftSide = styled(TwoSideSection)`
@media (max-width: 750px) { 
    justify-content :flex-end;
}
`
export const RightSide = styled(TwoSideSection)`
align-items: flex-start;
@media (max-width: 750px) { 
    justify-content :flex-start;
    align-items: center;
}
`

export const LandingTitle = styled.h1`
font-size : 40px;
font-family :  "Righteous";
margin : 0 ;
padding : 0 1rem;
@media (max-width: 750px) { 
    padding : 0 1rem 0 1rem;
}
`

export const SoupDiv = styled.div`
margin-left: 117px;
margin-bottom: 50px;
z-index:1;

`
export const LargeBackGroundImg = styled(LargeBg)`
display:block;
position: absolute;
top:75%;
right:0;
z-index:-1;
& > * {
  transform:scaleY(0.5);
}
`

const arrowSpin = keyframes`
form {
    transform : translateY(0);
}
to {
    transform : translateY(40px);
}
`

export const ArrowDiv = styled.div`
animation: ${arrowSpin} 1s linear 4s infinite alternate;
margin-top: 1em;
display:none;
@media (max-width: 750px) { 
    display:block;
}
`


export const ButtonLink = styled(Link)`
font-family :  "Sansita";
font-weight: 900;
color : #000000;
border-radius : 0.5em;
padding :7px 15px;
text-decoration:none;
margin-left:2rem;
background-color:#EDBAA0;
border:none;
font-size:25px;
letter-spacing: 0.5px;
@media (max-width: 750px) { 
  margin-top: 3em; 
  margin-left:0;
  background:#FFFFFF;
  border: 2px solid #000000;
  font-size:15px;
}
&:focus{
   outline:none;
}
`

export const LargeTitle = styled.h3`
font-family :  "Sansita";
font-size:30px;
margin:0;
letter-spacing: 0.5px;
padding: 0 2rem;
@media (max-width: 750px) { 
    display:none;
}
`
export const LargeText = styled.p`
text-align: left;
font-family :  "Montserrat";
font-size:17px;
padding: 0 2rem;
@media (max-width: 750px) { 
    display:none;
}
`