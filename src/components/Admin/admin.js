import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { ADMIN } from '../../constants/roles';
import { LANDING, MENUE } from '../../constants/routes';
import { FetchUsersAndOrders, ClearUsersAndOrders } from '../../action/adminAction'
import { withFirebase } from '../Firebase';
import format from 'date-format'
import SingleUser from './SingleUser';
import * as STYLED from './styled'

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            orders: [],
            guestOrders: [],
            guestKey: ''
        }
    }
    componentDidMount() {
        if (this.props.user.roles.ADMIN === ADMIN) {
            // is Admin
            this.props.firebase.users().once('value', snapshot => {
                const usersObject = snapshot.val();
                let usersList;
                if (usersObject !== null) {
                    usersList = Object.keys(usersObject).map(key => ({
                        ...usersObject[key],
                        uid: key,
                    }));
                    this.setState({
                        users: usersList,
                    });
                } else {
                    usersList = []
                }
                this.props.firebase.orders().once("value", snapshot => {
                    const orderObj = snapshot.val();
                    if (orderObj !== null) {
                        // has orderObj
                        const OrderList = Object.keys(orderObj).map(key => ({
                            ...orderObj[key]
                        }))
                        const keyarr = []
                        const AllguestOrdersValue = OrderList.filter((order, index) => {
                            if (order.userID === "GUEST") {
                                keyarr.push(Object.keys(orderObj)[index])
                            }
                            return order.userID === "GUEST"
                        })
                        this.setState({
                            users: usersList,
                            orders: OrderList,
                            guestKey: keyarr,
                            guestOrders: AllguestOrdersValue,
                            loading: true
                        });
                        this.props.FetchUsersAndOrders({
                            users: usersList,
                            orders: OrderList
                        })
                    } else {
                        // no orderObj
                        this.setState({
                            users: usersList,
                            orders: [],
                            loading: true
                        });
                        this.props.FetchUsersAndOrders({
                            users: usersList,
                            orders: []
                        })

                    }

                })
            })
        } else {
            // not admin
            this.props.history.push(LANDING)
        }
    }



    componentWillUnmount() {
        this.props.ClearUsersAndOrders()
        this.props.firebase.users().off();
        this.props.firebase.orders().off();
    }

    render() {
        const { users, loading, orders, guestOrders, guestKey } = this.state;
        return (
            <>
                <STYLED.TitlePage>Admin</STYLED.TitlePage>
                <STYLED.SubTitleAndUserList>
                    <STYLED.SubTitle>
                        Användar lista
                </STYLED.SubTitle>
                    {loading ? <STYLED.UserListUL>
                        {users.map((user, index) => (
                            <SingleUser key={index} user={user} orders={orders} />
                        ))}
                    </STYLED.UserListUL> : null}
                    <STYLED.SubTitle>
                        Gäst Köphistoria
                    </STYLED.SubTitle>
                    {loading ? <STYLED.UserListUL>
                        {guestOrders.map((order, index) => {
                            const orderDate = new Date(order.date)
                            return (
                                <STYLED.UserItem key={index}>
                                    <STYLED.OrderTitle>
                                        <STYLED.StrongFont>Köp nummer :</STYLED.StrongFont> {index + 1}
                                    </STYLED.OrderTitle>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Köp ID:</STYLED.StrongFont> {guestKey[index]}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Köp datum:</STYLED.StrongFont> {format('yyyy/MM/dd hh:mm', orderDate)}</STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Leverans kostnad: </STYLED.StrongFont>{order.deliveryCost}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Användarnamn: </STYLED.StrongFont>{order.username}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Epost: </STYLED.StrongFont>{order.phone}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>BetalingsMetod: </STYLED.StrongFont>{order.payment}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo>
                                        <STYLED.StrongFont>Introduktioner: </STYLED.StrongFont>{order.instructions}
                                    </STYLED.TextInfo>
                                    <STYLED.TextInfo><STYLED.StrongFont>Summa: </STYLED.StrongFont>{order.totalPrice}</STYLED.TextInfo>
                                    <STYLED.TextInfo><STYLED.StrongFont>Leverans Adress: </STYLED.StrongFont>{order.delivery.adress}</STYLED.TextInfo>
                                    <STYLED.TextInfo><STYLED.StrongFont>Hur många i Kundvangnen: </STYLED.StrongFont>{order.allCart.length}</STYLED.TextInfo>
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
                                </STYLED.UserItem>
                            )
                        })}
                    </STYLED.UserListUL> : null}
                </STYLED.SubTitleAndUserList>
                <STYLED.DivButton>
                    <STYLED.BackButton to={MENUE}>Tillbaka</STYLED.BackButton>
                </STYLED.DivButton>
            </>

        );
    }
}

const mapStateToProps = state => ({
    user: state.authUserRedux.user,
})

export default connect(mapStateToProps, { FetchUsersAndOrders, ClearUsersAndOrders })(compose(withFirebase, withRouter)(AdminPage))