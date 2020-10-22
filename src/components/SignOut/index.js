import React from 'react';
import { withFirebase } from '../Firebase';
import { SignOutButtonStyle } from '../Account/styled'
const SignOutButton = ({ firebase }) => (
    <SignOutButtonStyle type="button" onClick={firebase.doSignOut}>
        Sign Out
    </SignOutButtonStyle>
);

export default withFirebase(SignOutButton);