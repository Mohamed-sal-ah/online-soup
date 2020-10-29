import styled from 'styled-components'

export const FullPage = styled.div`
height:100%;
overflow:auto;
margin: 0;
z-index: -2;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-color:#FFFFFF;
`

export const MenueListUL = styled.ul`
list-style-type: none;
width:100%;
padding:0;
margin-top:20px;
margin-bottom:0;
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:10px;
@media (max-width: 750px) { 
margin:0;
padding:0;
display:flex;
flex-direction:column;
list-style-type:none;
}
`