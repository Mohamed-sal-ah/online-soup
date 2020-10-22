import React, { Component } from 'react'
import * as ROUTE from '../../constants/routes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as STYLED from './style'
class UserStatus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isUser: false
        }
    }

    componentDidMount() {
        console.log(this.props.user);
        if (this.props.user !== null && this.props.user !== '') {
            this.props.history.push(ROUTE.USER_PAY)
        }
    }
    render() {
        return (
            <STYLED.FullPage className="page">
                <STYLED.TitlePage>User your Account</STYLED.TitlePage>
                <STYLED.AllButtonDiv>
                    <STYLED.TwoButtonsDiv>
                        <STYLED.ButtonLinks to={ROUTE.SIGN_UP}>Sign up</STYLED.ButtonLinks>
                        <STYLED.ButtonLinks to={ROUTE.SIGN_IN}>Sign in</STYLED.ButtonLinks>
                    </STYLED.TwoButtonsDiv>
                    <STYLED.DivButton>
                        <STYLED.GuestButton to={ROUTE.GUEST}>Continue as Guest</STYLED.GuestButton>
                    </STYLED.DivButton>
                </STYLED.AllButtonDiv>
            </STYLED.FullPage>
        )
    }
}
const mapStateToProps = state => ({
    user: state.authUserRedux.user
})
export default connect(mapStateToProps, {})(withRouter(UserStatus))
