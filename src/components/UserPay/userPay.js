import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import { LoadOrder, ClearOrder } from '../../action/orderAction';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { ACCOUT_PAGE, DELIVERY_STATUS, MENUE, USER_STATUS } from '../../constants/routes';
import SingleFriend from './singleFriend';

export class UserPayPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            friends: '',
            allPayInfo: '',
            firendsKey: '',
            loading: false,
            message: ''
        }
    }
    componentDidMount() {
        const user = this.props.user
        if (user === null) {
            this.props.history.push(USER_STATUS)
        } else {
            const localOrder = JSON.parse(localStorage.getItem('order'))
            console.log(localOrder);
            if (localOrder === null) {
                this.props.history.push(MENUE)
            } else {
                this.props.LoadOrder(localOrder)
                this.props.firebase.userFirends(user.userID).on('value', snapshot => {
                    const dbValues = snapshot.val()
                    if (dbValues !== null) {
                        this.setState({ loading: true, friends: [...Object.values(dbValues)], firendsKey: [...Object.keys(dbValues)] })
                    } else {
                        this.setState({ loading: true, friends: [] })
                    }
                })
                this.setState({ loaded: true, allPayInfo: localOrder })
            }
        }
    }
    userSentPay = () => {
        const allState = this.state.allPayInfo
        const keyID = this.props.firebase.orders().push({
            date: this.props.firebase.serverValue.TIMESTAMP,
            username: this.props.user.username,
            userID: this.props.user.userID,
            delivery: {
                adress: this.props.user.adress,
            },
            ...allState
        })
        this.props.ClearOrder()
        localStorage.removeItem('cart')
        localStorage.removeItem('order')
        this.props.firebase.userOrder(this.props.user.userID).push(keyID.key)
    }

    userFriendSentPay = (numID, message) => {
        console.log(numID);
        console.log(message);
        const oneFriend = this.state.friends[numID]
        const friendKey = this.state.firendsKey[numID]
        const allState = this.state.allPayInfo
        console.log(friendKey);
        const keyID = this.props.firebase.orders().push({
            date: this.props.firebase.serverValue.TIMESTAMP,
            username: this.props.user.username,
            userID: this.props.user.userID,
            delivery: {
                adress: oneFriend.adress,
                to: oneFriend.name,
                message: message,
                friendID: friendKey
            },
            ...allState
        })
        this.props.firebase.userOrder(this.props.user.userID).push(keyID.key)
        this.props.ClearOrder()
        localStorage.removeItem('cart')
        localStorage.removeItem('order')
        this.props.history.push(DELIVERY_STATUS)
    }
    render() {
        const { loading, friends } = this.state
        return (
            <div>
                <h1>User Pay</h1>
                <button onClick={this.userSentPay}>Send to your Self</button>
                {loading ?
                    <div>
                        <h5>List of Friedns</h5>
                        {friends.length > 0 ? <ul>
                            {friends.map((item, index) => (
                                <SingleFriend key={index}
                                    idNumb={index}
                                    friend={item}
                                    sendOrder={this.userFriendSentPay} />
                            ))}
                        </ul> : <div>
                                <p>No Friends</p>
                                <Link to={ACCOUT_PAGE}>Click here to add Friend</Link>
                            </div>}
                    </div> : <p>Loading</p>}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    order: state.orderRedux.order,
    user: state.authUserRedux.user
})
export default connect(mapStateToProps, { LoadOrder, ClearOrder })(compose(withFirebase, withRouter)(UserPayPage))
