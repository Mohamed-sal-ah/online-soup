import React, { Component } from 'react'
import * as ROUTE from '../../constants/routes'
import { withRouter } from 'react-router-dom'
import * as STYLED from './style'

class UserStatusPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isUser: false,
            loading: false
        }
    }

    componentDidMount() {
        const localOrder = JSON.parse(localStorage.getItem('order'))
        if (localOrder === null) {
            // no order in localstorage
            this.props.history.push(ROUTE.MENUE)
        } else {
            if (this.props.user !== null) {
                // user is logged in
                this.props.history.push(ROUTE.USER_PAY)
            } else {
                this.setState({ loading: true })
            }
        }
    }
    render() {
        const { loading } = this.state
        return (
            <STYLED.FullPage className="page">
                {loading ? <>
                    <STYLED.TitlePage>Använd konto eller gäst</STYLED.TitlePage>
                    <STYLED.SubTitleText>Var sjunde soppa på köpet</STYLED.SubTitleText>
                    <STYLED.SubTitleText>Logga in eller skapar ett konto kan för att ta en del av erbjudande!</STYLED.SubTitleText>
                    <STYLED.AllButtonDiv>
                        <STYLED.TwoButtonsDiv>
                            <STYLED.ButtonLinks to={ROUTE.SIGN_UP}>Skapa Konto</STYLED.ButtonLinks>
                            <STYLED.ButtonLinks to={ROUTE.SIGN_IN}>Logga in</STYLED.ButtonLinks>
                        </STYLED.TwoButtonsDiv>
                        <STYLED.DivButton>
                            <STYLED.BackButton to={ROUTE.SHOPPING_CART}>Tillbaka</STYLED.BackButton>
                            <STYLED.GuestButton to={ROUTE.GUEST}>Fortsätt som Gäst</STYLED.GuestButton>
                        </STYLED.DivButton>
                    </STYLED.AllButtonDiv>
                </> : null}
            </STYLED.FullPage>
        )
    }
}
export default withRouter(UserStatusPage)
