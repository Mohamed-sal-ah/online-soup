import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
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
      height:fit-content;
      width:100%;
      border-radius:0;
  }
}
`

export const ProgressDivButton = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:100%;
align-items:center;
`

export const ProgressTotalDiv = styled.div`
position: relative;
width:70%;
padding: 10px 0;
display:flex;
justify-content:center;
align-items: center;
`
export const Progress = styled.div`
  position: absolute;
  width: 100%;
  border-bottom: 3px solid #ACACA6;
  z-index: -1;
`

export const SpanPercent = styled.span`
  position: absolute;
  height: 100%;
  border-bottom: 3px solid #FF5722;
  z-index: 1;
  transition: 0.5s linear;
`

export const StepsDiv = styled.div`
position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > .selected {
       border: 3px solid #FF5722;
  }
  & > .completed{
        border: 3px solid #FF5722;
        background: #FF5722; 
  }
  & > .submit{
        border: 3px solid #417301;
        background: #417301; 
  }
`
export const Step = styled.span`
transition: 0.25s linear;
    width: 30px;
    height: 30px;
  background: #fff;
  border: 3px solid #ACACA6;
  border-radius: 50%;
`

export const CompletedStep = styled(Step)`
position:relative;
display:flex;
align-items:center;
justify-content:center;
`

export const CompletedCheckMark = styled.span`
    transform: rotate(45deg);
    left: 9px;
    top: 0px;
    width: 8px;
    height: 19px;
    border: solid #FFFFFF;
    border-width: 0 3px 3px 0;
`

export const MotionDiv = styled(motion.div)`
display:flex;
width:100%;
height:fit-content;
justify-content:center;
   & > * {
    width: 700px;
   }
@media (max-width: 750px) { 
   & > * {
    width: 100%;
   }
}
`