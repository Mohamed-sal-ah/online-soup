import React, { Component } from 'react'
import format from 'date-format'
import * as STYLED from './styled'

export class SingleUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showInfo: false,
            orderHistory: '',
            ordersIDArray: '',
            friendsArr: ''
        }
    }

    componentDidMount() {
        const allOrders = this.props.orders
        const userAll = this.props.user
        const userID = userAll.uid
        const filterOrders = allOrders.filter(order => order.userID === userID)
        if (userAll.hasOwnProperty("orders")) {
            if (userAll.hasOwnProperty("friends")) {
                const arrFriends = userAll.friends
                this.setState({
                    orderHistory: filterOrders,
                    ordersIDArray: Object.values(userAll.orders),
                    friendsArr: [...Object.values(arrFriends)]
                })
            } else {
                this.setState({
                    orderHistory: filterOrders, ordersIDArray: Object.values(userAll.orders),
                    friendsArr: []
                })
            }
        } else {
            if (userAll.hasOwnProperty("friends")) {
                const arrFriends = userAll.friends
                this.setState({
                    orderHistory: filterOrders, ordersIDArray: null,
                    friendsArr: [...Object.values(arrFriends)]
                })
            } else {
                this.setState({
                    orderHistory: filterOrders, ordersIDArray: null,
                    friendsArr: []
                })
            }
        }
    }
    showMoreInfo = () => {
        // toggle info
        const bool = !this.state.showInfo
        this.setState({ showInfo: bool })
    }

    render() {
        const { showInfo, orderHistory, ordersIDArray, friendsArr } = this.state
        const { user } = this.props
        const SignUpDate = new Date(user.createdDate)
        return (
            <STYLED.UserItem>
                <STYLED.UserInfoAndButtonDiv>
                    <STYLED.UserInfoDiv>
                        <STYLED.TextInfo>
                            <STYLED.StrongFont>ID:</STYLED.StrongFont> {user.uid}
                        </STYLED.TextInfo>
                        <STYLED.TextInfo>
                            <STYLED.StrongFont>Epost adress:</STYLED.StrongFont> {user.email}
                        </STYLED.TextInfo>
                        <STYLED.TextInfo>
                            <STYLED.StrongFont>Användar namn:</STYLED.StrongFont> {user.username}
                        </STYLED.TextInfo>
                    </STYLED.UserInfoDiv>
                    <STYLED.ToggleUserInfoButton onClick={this.showMoreInfo}>{showInfo ? "hide info" : "show info"}</STYLED.ToggleUserInfoButton>
                </STYLED.UserInfoAndButtonDiv>
                {showInfo ? <>
                    <STYLED.TextInfo>
                        <STYLED.StrongFont>Skapad :</STYLED.StrongFont> {format('yyyy/MM/dd', SignUpDate)}
                    </STYLED.TextInfo>
                    <STYLED.TextInfo>
                        <STYLED.StrongFont>Adress :</STYLED.StrongFont> {user.adress}
                    </STYLED.TextInfo>
                    <STYLED.TextInfo>
                        <STYLED.StrongFont>Hur många Vänner</STYLED.StrongFont> : {friendsArr.length}
                    </STYLED.TextInfo>
                    <STYLED.TextInfo>
                        <STYLED.StrongFont>Telefon:</STYLED.StrongFont> {user.phone}
                    </STYLED.TextInfo>
                    <STYLED.TextInfo>
                        <STYLED.StrongFont>Hur många köpt:</STYLED.StrongFont> {orderHistory.length}
                    </STYLED.TextInfo>
                    {orderHistory.length > 0 ? <STYLED.OrderHistoryUL>
                        {orderHistory.map((order, index) => {
                            const orderDate = new Date(order.date)
                            return (
                                <STYLED.OrderHistoryItem key={index}>
                                    <STYLED.OrderTitle>
                                        <STYLED.StrongFont>Köp nummer :</STYLED.StrongFont> {index + 1}
                                    </STYLED.OrderTitle>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Köp ID:</STYLED.StrongFont> {ordersIDArray[index]}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>BetalingsMetod: </STYLED.StrongFont>{order.payment}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Introduktioner: </STYLED.StrongFont>{order.instructions}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Köp datum:</STYLED.StrongFont> {format('yyyy/MM/dd hh:mm', orderDate)}</STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Leverans kostnad: </STYLED.StrongFont>{order.deliveryCost}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo><STYLED.StrongFont>Summa: </STYLED.StrongFont>{order.totalPrice}</STYLED.TextInfo>
                                    <STYLED.TextInfo><STYLED.StrongFont>Leverans Adress: </STYLED.StrongFont>{order.delivery.adress}</STYLED.TextInfo>
                                    <STYLED.TextInfo><STYLED.StrongFont>Hur många i Kundvangnen: </STYLED.StrongFont>{order.allCart.length}</STYLED.TextInfo>
                                    {order.delivery.to ? <>
                                        <STYLED.TextInfo><STYLED.StrongFont>Leverans Till: </STYLED.StrongFont>{order.delivery.to}</STYLED.TextInfo>
                                        <STYLED.TextInfo><STYLED.StrongFont>Meddelande: </STYLED.StrongFont>{order.delivery.message ? order.delivery.message : "No Message"} </STYLED.TextInfo>
                                    </> : null}
                                    {order.allCart.map((item, index) =>
                                        (
                                            <React.Fragment key={index}>

                                                <STYLED.CartTitle><STYLED.StrongFont>Kundvangn nummer:</STYLED.StrongFont> {index + 1}</STYLED.CartTitle>
                                                <STYLED.TextInfo><STYLED.StrongFont>Soppans namn:</STYLED.StrongFont> {item.name}</STYLED.TextInfo>
                                                <STYLED.TextInfo><STYLED.StrongFont>Hur många:</STYLED.StrongFont> {item.howMany}</STYLED.TextInfo>
                                                <STYLED.TextInfo>
                                                    <STYLED.StrongFont>
                                                        Tillbehör
                                                    </STYLED.StrongFont>
                                                </STYLED.TextInfo>
                                                {Object.keys(item.remove).map((keyName, index) => {
                                                    if (Object.values(item.remove)[index] === true) {
                                                        return <STYLED.TextInfo key={index}>Utan {keyName}</STYLED.TextInfo>
                                                    }
                                                    return null
                                                }
                                                )}
                                                {Object.keys(item.accessories).map((keyName, index) => {
                                                    if (Object.values(item.accessories)[index] > 0) {
                                                        return <STYLED.TextInfo key={index}>{Object.values(item.accessories)[index]}st {keyName}</STYLED.TextInfo>
                                                    }
                                                    return null
                                                }
                                                )}
                                                {Object.keys(item.drinks).map((keyName, index) => {
                                                    if (Object.values(item.drinks)[index] > 0) {
                                                        return <STYLED.TextInfo key={index}>{Object.values(item.drinks)[index]}st {keyName}</STYLED.TextInfo>
                                                    }
                                                    return null
                                                }
                                                )}
                                            </React.Fragment>
                                        ))}
                                </STYLED.OrderHistoryItem>
                            )
                        }

                        )}
                    </STYLED.OrderHistoryUL> : <STYLED.TextInfo>Har inte köpt</STYLED.TextInfo>}
                </> : null}
            </STYLED.UserItem>
        )
    }
}


export default SingleUser
