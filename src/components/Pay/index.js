import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { connect } from 'react-redux'
import { LoadOrder, ClearOrder } from '../../action/orderAction';
import { withRouter } from "react-router-dom";
import { CARD_PAY, DELIVERY_STATUS, MENUE, SHOPPING_CART } from '../../constants/routes'
import * as STYLED from './styled'

export class PayPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allPayInfo: '',
            loaded: false,
        }
    }
    componentDidMount() {
        const localOrder = JSON.parse(localStorage.getItem('order'))
        console.log(localOrder);
        if (localOrder === null) {
            this.props.history.push(MENUE)
        } else {
            this.props.LoadOrder(localOrder)
            this.setState({ loaded: true, allPayInfo: localOrder })
        }
    }
    onSubmitPay = e => {
        const allState = this.state.allPayInfo
        const payMethod = e.target.id
        const guest = JSON.parse(localStorage.getItem('guest'))
        if (guest !== null) {
            this.props.firebase.orders().push({
                date: this.props.firebase.serverValue.TIMESTAMP,
                email: guest.email,
                instructions: guest.instructions,
                phone: guest.phone,
                username: guest.username,
                payment: payMethod,
                delivery: {
                    adress: guest.adress
                },
                ...allState
            })
        } else if (allState.delivery.to) {
            const keyID = this.props.firebase.orders().push({
                date: this.props.firebase.serverValue.TIMESTAMP,
                userID: this.props.user.userID,
                payment: payMethod,
                delivery: {
                    ...allState.delivery
                },
                ...allState
            })
            this.props.firebase.userOrder(this.props.user.userID).push(keyID.key)
        } else {
            const keyID = this.props.firebase.orders().push({
                date: this.props.firebase.serverValue.TIMESTAMP,
                userID: this.props.user.userID,
                payment: payMethod,
                delivery: {
                    ...allState.delivery
                },
                ...allState
            })
            this.props.firebase.userOrder(this.props.user.userID).push(keyID.key)
        }
        console.log(payMethod);
        localStorage.removeItem('cart')
        // localStorage.removeItem('order')
        this.props.history.push(DELIVERY_STATUS)
    }

    render() {
        const { loaded } = this.state
        return (
            <STYLED.FullPage className="page">
                {loaded ? <>
                    <STYLED.TitlePage>Submit Payment</STYLED.TitlePage>
                    <STYLED.AllButtonDiv>
                        <STYLED.ThreeButtonsDiv>
                            <STYLED.ButtonLinks onClick={this.onSubmitPay} id="swish">Swish</STYLED.ButtonLinks>
                            <STYLED.CardLink to={CARD_PAY}>Kort</STYLED.CardLink>
                            <STYLED.ButtonLinks onClick={this.onSubmitPay} id="card">Klarna</STYLED.ButtonLinks>
                        </STYLED.ThreeButtonsDiv>
                        <STYLED.DivButton>
                            <STYLED.BackButton to={SHOPPING_CART}>Back</STYLED.BackButton>
                        </STYLED.DivButton>
                    </STYLED.AllButtonDiv>
                </> : <p>Loading...</p>}
            </STYLED.FullPage>
        )
    }
}

const mapStateToProps = state => ({
    order: state.orderRedux.order,
    user: state.authUserRedux.user
})

export default connect(mapStateToProps, { LoadOrder, ClearOrder })(compose(withFirebase, withRouter)(PayPage))
