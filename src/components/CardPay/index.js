import React, { Component } from 'react'
import * as STYLED from './style'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { connect } from 'react-redux'
import { LoadOrder, ClearOrder } from '../../action/orderAction';
import { withRouter } from "react-router-dom";
import { MENUE, PAY_PAGE, DELIVERY_STATUS } from '../../constants/routes';

export class CardPay extends Component {
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


    CardSubmit = () => {
        const allState = this.state.allPayInfo
        const payMethod = "card"
        const guest = JSON.parse(localStorage.getItem('guest'))
        if (guest !== null) {
            this.props.firebase.orders().push({
                date: this.props.firebase.serverValue.TIMESTAMP,
                userID: guest.userID,
                payment: payMethod,
                email: guest.email,
                instructions: guest.instructions,
                phone: guest.phone,
                username: guest.username,
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
        this.props.history.push(DELIVERY_STATUS)
    }

    render() {
        const { loaded } = this.state
        return (
            <STYLED.FullPage className="page">
                {loaded ? <>
                    <STYLED.TitlePage>Fyll kort</STYLED.TitlePage>
                    <STYLED.FormStyled>
                        <STYLED.InputDiv>

                            <STYLED.StyledInput
                                name="cardnumbers"
                                type="text"
                                placeholder="000 000 000"
                                disabled={true}
                            />
                            <STYLED.StyledInput
                                name="firstname"
                                type="text"
                                placeholder="First Name"
                                disabled={true}
                            />
                            <STYLED.StyledInput
                                name="lastname"
                                type="adress"
                                placeholder="Last Name"
                                disabled={true}
                            />
                            <STYLED.StyledInput
                                name="date"
                                type="text"
                                placeholder="MM/YY"
                                disabled={true}
                            />
                            <STYLED.StyledInput
                                name="cvc"
                                type="cvc"
                                placeholder="CVC"
                                disabled={true}
                            />
                        </STYLED.InputDiv>
                        <STYLED.DivButton>
                            <STYLED.BackButton to={PAY_PAGE}>Back</STYLED.BackButton>
                            <STYLED.SubmitButton onClick={this.CardSubmit}>
                                Confirm
                </STYLED.SubmitButton>
                        </STYLED.DivButton>
                    </STYLED.FormStyled>
                </> : null}
            </STYLED.FullPage >
        )
    }
}
const mapStateToProps = state => ({
    order: state.orderRedux.order,
    user: state.authUserRedux.user
})

export default connect(mapStateToProps, { LoadOrder, ClearOrder })(compose(withFirebase, withRouter)(CardPay))
