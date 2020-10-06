import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { connect } from 'react-redux'
import { LoadOrder, ClearOrder } from '../../action/orderAction';
import { withRouter, Link } from "react-router-dom";
import { DELIVERY_STATUS, MENUE, SHOPPING_CART, USER_PAY } from '../../constants/routes'

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
    onSubmitPay = () => {
        const allState = this.state.allPayInfo
        const allGuest = JSON.parse(localStorage.getItem('guest'))
        this.props.firebase.orders().push({
            date: this.props.firebase.serverValue.TIMESTAMP,
            userID: allGuest.userID,
            delivery: {
                adress: allGuest.adress
            },
            ...allState
        })
        this.props.ClearOrder()
        localStorage.removeItem('cart')
        localStorage.removeItem('order')
        this.props.history.push(DELIVERY_STATUS)
    }

    render() {
        const { loaded, isUser } = this.state
        return (
            <div>
                {loaded ? <div>
                    <h1>Submit Payment</h1>
                    <button onClick={this.onSubmitPay}>Submit Pay</button>
                    <Link to={SHOPPING_CART}>Back</Link>
                </div> : <p>Loading...</p>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    order: state.orderRedux.order,
})

export default connect(mapStateToProps, { LoadOrder, ClearOrder })(compose(withFirebase, withRouter)(PayPage))
