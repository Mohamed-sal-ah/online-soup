import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import { LoadOrder, ClearOrder } from '../../action/orderAction';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { ACCOUT_PAGE, MENUE, USER_INSTRUCTION, USER_STATUS } from '../../constants/routes';
import SingleFriend from './singleFriend';
import * as STYLED from './style'

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
        localStorage.setItem('order', JSON.stringify({
            username: this.props.user.username,
            delivery: {
                adress: this.props.user.adress,
            },
            ...allState
        }))
        // const keyID = this.props.firebase.orders().push({
        //     date: this.props.firebase.serverValue.TIMESTAMP,
        //     username: this.props.user.username,
        //     userID: this.props.user.userID,
        //     delivery: {
        //         adress: this.props.user.adress,
        //     },
        //     ...allState
        // })
        // this.props.ClearOrder()
        localStorage.removeItem('cart')
        // localStorage.removeItem('order')
        // this.props.firebase.userOrder(this.props.user.userID).push(keyID.key)
        this.props.history.push(USER_INSTRUCTION)
    }

    userFriendSentPay = (numID, message) => {
        console.log(numID);
        console.log(message);
        const oneFriend = this.state.friends[numID]
        const friendKey = this.state.firendsKey[numID]
        const allState = this.state.allPayInfo
        localStorage.setItem('order', JSON.stringify({
            username: this.props.user.username,
            delivery: {
                adress: oneFriend.adress,
                to: oneFriend.name,
                message: message,
                friendID: friendKey
            },
            ...allState
        }))
        // console.log(friendKey);
        // const keyID = this.props.firebase.orders().push({
        //     date: this.props.firebase.serverValue.TIMESTAMP,
        //     username: this.props.user.username,
        //     userID: this.props.user.userID,
        //     delivery: {
        //         adress: oneFriend.adress,
        //         to: oneFriend.name,
        //         message: message,
        //         friendID: friendKey
        //     },
        //     ...allState
        // })
        // this.props.firebase.userOrder(this.props.user.userID).push(keyID.key)
        localStorage.removeItem('cart')
        // localStorage.removeItem('order')
        this.props.history.push(USER_INSTRUCTION)
    }
    SubmitAddFriend = e => {
        e.preventDefault()
        const user = this.props.userAuth
        const newFirend = {
            name: this.state.name,
            adress: this.state.adress
        }
        this.props.firebase.userFirends(user.userID).push({
            ...newFirend
        })
    }

    render() {
        const { loading, friends } = this.state
        return (
            <>
                <STYLED.TitlePage>User Pay</STYLED.TitlePage>
                <STYLED.FormTitle>Add friend</STYLED.FormTitle>
                <STYLED.StyledForm onSubmit={this.SubmitAddFriend}>
                    <STYLED.AccountLink to={ACCOUT_PAGE}>Account</STYLED.AccountLink>
                    <STYLED.InputFlex>
                        <STYLED.InputDivForm>
                            <STYLED.StyledInputForm type="text" onChange={this.onChangeText} name="name" placeholder="Type In Name" />
                        </STYLED.InputDivForm>
                        <STYLED.InputDivForm>
                            <STYLED.StyledInputForm type="text" onChange={this.onChangeText} name="adress" placeholder="Type In Adress" />
                        </STYLED.InputDivForm>
                    </STYLED.InputFlex>
                    <STYLED.SubmitInputForm>Submit</STYLED.SubmitInputForm>
                </STYLED.StyledForm>
                {loading ?
                    <>
                        <STYLED.FriendsUL>
                            {friends.map((item, index) => (
                                <SingleFriend key={index}
                                    idNumb={index}
                                    friend={item}
                                    sendOrder={this.userFriendSentPay} />
                            ))}
                        </STYLED.FriendsUL>
                    </> : <p>Loading</p>}
                <STYLED.DivButton>
                    <STYLED.SendButton onClick={this.userSentPay}>Send to your Self</STYLED.SendButton>
                </STYLED.DivButton>
            </>
        )
    }
}
const mapStateToProps = state => ({
    order: state.orderRedux.order,
    user: state.authUserRedux.user
})
export default connect(mapStateToProps, { LoadOrder, ClearOrder })(compose(withFirebase, withRouter)(UserPayPage))
