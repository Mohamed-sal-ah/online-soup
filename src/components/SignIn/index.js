import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as STYLED from './style'



const SignInPage = () => (
    <STYLED.FullPage className="page">
        <SignInForm />
    </STYLED.FullPage>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        // submit sign in
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password).then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.USER_PAY);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();

    };
    onChange = event => {
        // on chnage text
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <>
                <STYLED.TitlePage>Logga in</STYLED.TitlePage>
                <STYLED.FormStyled onSubmit={this.onSubmit}>
                    <STYLED.InputDiv>

                        <STYLED.StyledInput
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Epost address"
                        />
                        <STYLED.StyledInput
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Lösenord"
                        />
                    </STYLED.InputDiv>
                    {error && <p>{error.message}</p>}
                    <STYLED.DivButton>
                        <STYLED.BackButton to={ROUTES.USER_STATUS}>Tillbaka</STYLED.BackButton>
                        <STYLED.SubmitButton disabled={isInvalid} type="submit">
                            Logga in
                        </STYLED.SubmitButton>
                    </STYLED.DivButton>
                </STYLED.FormStyled>

            </>
        );
    }
}
const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };