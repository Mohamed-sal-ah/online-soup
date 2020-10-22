import styled from 'styled-components'
import Plus from '../../icons/plus.svg'
import Minus from '../../icons/minus.svg'

// ** PAGE 1 ------------------------------------------------------
export const Page1TitleOptions = styled.section`
height: 625px;
display:flex;
flex-direction:column;
justify-content:flex-start;
width:100%;
& div:first-of-type{
   border-top-width:2px;
}
& div:last-of-type{
  border-bottom-width:2px;
}
`

export const Page1NameOptionDiv = styled.div`
background-color:#FFFFFF;
border-top:solid #CACACA; 
border-bottom:solid #CACACA;
border-top-width: 1px;
border-bottom-width: 1px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
export const Page1OptionTitle = styled.h4`
font-family :  "Sansita";
margin:0; 
padding:20px 5px;
font-size:25px;
margin-left:10px;
color:#000000;
`


export const Page1NameOptionLabel = styled.label`
position:relative;
user-select: none;
border:3px solid #000000;
width:33px;
height:33px;
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;

 input:checked ~ span:after{
    display:block;
}
 span:after{
    transform: rotate(45deg);
    left: 9px;
    top: 0px;
    width: 11px;
    height: 25px;
    border: solid #000000;
    border-width: 0 4px 4px 0;
}
`

export const Page1CustomChecked = styled.span`
 position: absolute;
  top: 0;
  left: 0;
height: 100%;
  width: 100%;
:after{
   content: "";
  position: absolute;
  display: none;
}
`

export const Page1CustomOptionInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

//* PAGE 2 ---------------------------------------------------------

export const Page2TitleSecions = styled.section`
display:flex;
flex-direction:column;
justify-content:flex-start;
width:100%;
height: 625px;
`


export const Page2NameOptionDiv = styled.div`
background-color:#FFFFFF;
border-top:solid #CACACA; 
border-bottom:solid #CACACA;
border-top-width: 1px;
border-bottom-width: 1px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
export const Page2SectionTitle = styled.h3`
font-family :  "Sansita";
margin:0; 
padding:5px;
font-size:25px;
margin-left:10px;
color:#000000;
`

export const Page2SectionTitleOptionDiv = styled.div`
& div:first-of-type{
   border-top-width:2px;
}
& div:last-of-type{
  border-bottom-width:2px;
}
`

export const Page2OptionTitle = styled.h4`
font-family : "Sansita";
margin:0; 
font-size:20px;
margin-left:10px;
color:#000000;
`
export const Page2PriceButtonDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width: 40%;
`

export const Page2ButtonAndValueDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-right:10px;
`

export const Page2ButtonStyle = styled.button`
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
export const PlusSign = styled(Page2ButtonStyle)`
background:url(${Plus}) center no-repeat;
background-size: 100%;
width:30px;
height:30px;
`
export const MinusSign = styled(Page2ButtonStyle)`
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

export const PriceSummaryDiv = styled.div`
background-color:#FFFFFF;
border-top: 2px solid #CACACA;
border-bottom: 2px solid #CACACA;
display:flex;
flex-direction:column;
justify-content:space-evenly;
`
export const PriceNumber = styled.p`
font-family :  "Sansita";
font-size:20px;
width:40px;
margin:5px 0 5px 15px;
text-align:center;
width:fit-content;
`
//* PAGE 3 -------------------------------------------------------

export const Page3TitleRadioSection = styled.section`
height: 625px;
display:flex;
flex-direction:column;
justify-content:flex-start;
width:100%;
& div:first-of-type{
   border-top-width:2px;
}
& div:last-of-type{
  border-bottom-width:2px;
}
`

export const Page3NameRadioButtonDiv = styled.div`
background-color:#FFFFFF;
border-top:solid #CACACA; 
border-bottom:solid #CACACA;
border-top-width: 1px;
border-bottom-width: 1px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
export const Page3RadioTitle = styled.h4`
font-family :  "Sansita";
margin:0; 
padding:20px 5px;
font-size:25px;
margin-left:10px;
color:#000000;
`

export const Page3RadioLabel = styled.label`
position:relative;
user-select: none;
border:3px solid #000000;;
width:31px;
height:31px;
display:flex;
align-items:center;
justify-content:center;
margin-right:10px;
border-radius: 51%;
  & input:checked ~span {
      background-color: #000000;;
  }
  & input:checked ~span:after{
    display: block;
  }

`

export const Page3Input = styled.input`
position: absolute;
  opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
    margin: 0;
`

export const Page3CustomCheckmark = styled.span`
  position: static;
  height: 25px;
  width: 25px;
  border-radius: 51%;
`