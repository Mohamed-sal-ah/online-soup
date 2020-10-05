import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    adress : '',
    isAdmin:false,
    isGuest:false,
    error: null,
    };

const SignUpPage = () => {
    return ( <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div> );
}

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }
    onSubmit = event => {
        const { username, email, passwordOne, adress} = this.state;
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
                        userID
                    });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.MENUE);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    onChangeCheckbox = event => {
        this.setState({[event.target.name]:event.target.checked})
    }
    render() { 
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            adress,
            error,
            } = this.state;
            const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            adress === '' ||
            username === '';

        return ( 
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="adress"
                    value={adress}
                    onChange={this.onChange}
                    type="adress"
                    placeholder="Home Adress"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>
                {error && <p>{error.message}</p>}
            </form>
         );
    }
}

const SignUpLink = () => (
    <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
    );
 
    const SignUpForm = compose(
        withRouter,
        withFirebase,
        )(SignUpFormBase);

export { SignUpForm, SignUpLink };
 
export default SignUpPage;

/* Let’s start with the sign up page (registration page). It consists of the page, a form, and a link. The
form is used to sign up a new user to your application with username, email, and password. The link
will be used on the sign in page (login page) later if a user has no account yet. It is a redirect to the
sign up page, but not used on the sign up page itself. Implement the src/components/SignUp/index.js
file the following way: */