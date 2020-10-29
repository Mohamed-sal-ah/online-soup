import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as STYLED from './style'

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    adress: '',
    phone: '',
    isAdmin: false,
    isGuest: false,
    error: null,
};

const SignUpPage = () => {
    return (<STYLED.FullPage className="page">
        <STYLED.TitlePage>Skapa Konto</STYLED.TitlePage>
        <SignUpForm />
    </STYLED.FullPage>);
}

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }
    onSubmit = event => {
        const { username, email, passwordOne, adress, phone } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                const createdDate = this.props.firebase.serverValue.TIMESTAMP;
                const userID = authUser.user.uid;
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        adress,
                        createdDate,
                        phone,
                        userID
                    });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.USER_PAY);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    }
    onChange = event => {
        // on change text
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            adress,
            error,
            phone
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            adress === '' ||
            username === '';

        return (
            <STYLED.FormStyled onSubmit={this.onSubmit}>
                <STYLED.InputDiv>

                    <STYLED.StyledInput
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Fullnamn"
                    />
                    <STYLED.StyledInput
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Epost address"
                    />
                    <STYLED.StyledInput
                        name="adress"
                        value={adress}
                        onChange={this.onChange}
                        type="adress"
                        placeholder="Hem adress"
                    />
                    <STYLED.StyledInput
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Lösenord"
                    />
                    <STYLED.StyledInput
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Bekräfta lösenord"
                    />
                    <STYLED.StyledInput type="text"
                        name="phone"
                        onChange={this.onChange}
                        value={phone}
                        placeholder="Skriv in telefon siffror"
                    />
                </STYLED.InputDiv>
                <STYLED.DivButton>
                    <STYLED.BackButton to={ROUTES.USER_STATUS}>Tillbaka</STYLED.BackButton>
                    <STYLED.SubmitButton disabled={isInvalid} type="submit">
                        Skapa Konto
                </STYLED.SubmitButton>
                </STYLED.DivButton>

                {error && <p>{error.message}</p>}
            </STYLED.FormStyled>
        );
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);


export default SignUpPage;

/* Let’s start with the sign up page (registration page). It consists of the page, a form, and a link. The
form is used to sign up a new user to your application with username, email, and password. The link
will be used on the sign in page (login page) later if a user has no account yet. It is a redirect to the
sign up page, but not used on the sign up page itself. Implement the src/components/SignUp/index.js
file the following way: */