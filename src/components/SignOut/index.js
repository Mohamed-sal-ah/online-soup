import React from 'react';
import { withFirebase } from '../Firebase';
import styled from 'styled-components';

export const SignOutButtonStyle = styled.button`
margin-right:10px;
font-family :  "Sansita";
text-decoration:none;
font-size:20px;
background-color: #FFFFFF;
border:none;
padding:10px;
border:2px solid #000000;
cursor:pointer;
`

// sign out button
const SignOutButton = ({ firebase }) => (
    <SignOutButtonStyle type="button" onClick={firebase.doSignOut}>
        Logga ut
    </SignOutButtonStyle>
);

export default withFirebase(SignOutButton);