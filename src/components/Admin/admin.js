import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { ADMIN } from '../../constants/roles';
import { LANDING, MENUE } from '../../constants/routes';
import { FetchUsersAndOrders, ClearUsersAndOrders } from '../../action/adminAction'
import { withFirebase } from '../Firebase';
import SingleUser from './SingleUser';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            orders: []
        }
    }
    componentDidMount() {
        console.log(this.props.user);
        if (this.props.user.roles.ADMIN === ADMIN) {
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
                    console.log(orderObj);
                    if (orderObj !== null) {
                        const OrderList = Object.keys(orderObj).map(key => ({
                            ...orderObj[key]
                        }))
                        this.setState({
                            users: usersList,
                            orders: OrderList,
                            loading: true
                        });
                        this.props.FetchUsersAndOrders({
                            users: usersList,
                            orders: OrderList
                        })
                    } else {
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
                    console.log(usersList);

                })
            })
        } else {
            this.props.history.push(LANDING)
        }
    }



    componentWillUnmount() {
        console.log('Unmount');
        this.props.ClearUsersAndOrders()
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading, orders } = this.state;
        return (
            <>
                <div>
                    <h1>Admin</h1>
                    <p>
                        The Admin Page is accessible by every signed in admin user.
                </p>
                    <Link to={MENUE}>Back</Link>
                    {loading ? <ul>
                        {users.map((user, index) => (
                            <SingleUser key={index} user={user} orders={orders} />
                        ))}
                    </ul> : <div>Loading ...</div>}

                </div>
            </>

        );
    }
}

const mapStateToProps = state => ({
    user: state.authUserRedux.user,
})

export default connect(mapStateToProps, { FetchUsersAndOrders, ClearUsersAndOrders })(compose(withFirebase, withRouter)(AdminPage))