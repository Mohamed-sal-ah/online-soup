import React, { Component } from 'react'
import format from 'date-format'

export class SingleUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showInfo: false,
            orderHistory: ''
        }
    }

    componentDidMount() {
        const allOrders = this.props.orders
        const userID = this.props.user.uid
        const filterOrders = allOrders.filter(order => order.userID === userID)
        console.log(filterOrders);
        this.setState({ orderHistory: filterOrders })
    }
    showMoreInfo = () => {
        const bool = !this.state.showInfo
        this.setState({ showInfo: bool })
    }

    render() {
        const { showInfo, orderHistory } = this.state
        const { user } = this.props
        const SignUpDate = new Date(user.createdDate)
        return (
            <li>
                <span>
                    <strong>ID:</strong> {user.uid}
                </span>
                <span>
                    <strong>E-Mail:</strong> {user.email}
                </span>
                <span>
                    <strong>Username:</strong> {user.username}
                </span>
                <button onClick={this.showMoreInfo}>{showInfo ? "hide info" : "show info"}</button>
                {showInfo ? <div>
                    <span>
                        <strong>Created :</strong> {format('yyyy/MM/dd', SignUpDate)}
                    </span>
                    {orderHistory.length > 0 ? <ul>
                        {orderHistory.map((order, index) => {
                            const orderDate = new Date(order.date)

                            return (
                                <li key={index}>
                                    <p>Order Date {format('yyyy/MM/dd hh:mm', orderDate)}</p>
                                    <p>Delivery Cost {order.deliveryCost}</p>
                                    <p>Total Cost {order.totalPrice}</p>
                                    <p>Delivery : {order.delivery.adress}</p>
                                    {order.delivery.to ? <div>
                                        <p>To : {order.delivery.to}</p>
                                        <p>Message : {order.delivery.message ? order.delivery.message : "No Message"} </p>
                                    </div> : null}
                                    <p>All Cart</p>
                                    {order.allCart.map((item, index) =>
                                        (
                                            <div key={index}>

                                                <p>{item.name}</p>
                                                {Object.keys(item.remove).map((keyName, index) => {
                                                    if (Object.values(item.remove)[index] === true) {
                                                        return <p key={index}>Utan {keyName}</p>
                                                    }
                                                    return null
                                                }
                                                )}
                                                {Object.keys(item.accessories).map((keyName, index) => {
                                                    if (Object.values(item.accessories)[index] > 0) {
                                                        return <p key={index}>{Object.values(item.accessories)[index]}st {keyName}</p>
                                                    }
                                                    return null
                                                }
                                                )}
                                                {Object.keys(item.drinks).map((keyName, index) => {
                                                    if (Object.values(item.drinks)[index] > 0) {
                                                        return <p key={index}>{Object.values(item.drinks)[index]}st {keyName}</p>
                                                    }
                                                    return null
                                                }
                                                )}
                                            </div>
                                        ))}
                                </li>
                            )
                        }

                        )}
                    </ul> : <p>No history of order</p>}
                </div> : null}
            </li>
        )
    }
}


export default SingleUser
