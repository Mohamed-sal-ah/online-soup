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
            name: '',
            adress: '',
            firendsKey: '',
            loading: false,
            uID: '',
            message: ''
        }
    }
    componentDidMount() {
        const user = this.props.user
        if (user === null) {
            this.props.history.push(USER_STATUS)
        } else {
            const localOrder = JSON.parse(localStorage.getItem('order'))
            if (localOrder === null) {
                this.props.history.push(MENUE)
            } else {
                this.props.LoadOrder(localOrder)
                this.setState({ uID: user.userID })
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
        // user send
        const allState = this.state.allPayInfo
        localStorage.setItem('order', JSON.stringify({
            username: this.props.user.username,
            delivery: {
                adress: this.props.user.adress,
            },
            ...allState
        }))
        localStorage.removeItem('cart')
        this.props.history.push(USER_INSTRUCTION)
    }

    userFriendSentPay = (numID, message) => {
        // friend send
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
        localStorage.removeItem('cart')
        this.props.history.push(USER_INSTRUCTION)
    }
    onChangeText = e => {
        // on change input
        const valueText = e.target.value
        this.setState({ [`${e.target.name}`]: valueText })
    }
    SubmitAddFriend = e => {
        // add friend
        e.preventDefault()
        const user = this.props.user
        const newFirend = {
            name: this.state.name,
            adress: this.state.adress
        }
        this.props.firebase.userFirends(user.userID).push({
            ...newFirend
        })
    }
    componentWillUnmount() {
        this.props.firebase.userFirends(this.state.uID).off()
    }

    render() {
        const { loading, friends } = this.state
        return (
            <>
                <STYLED.TitlePage>Användare</STYLED.TitlePage>
                <STYLED.AccountLink to={ACCOUT_PAGE}>Konto</STYLED.AccountLink>
                <STYLED.FormTitle>Add friend</STYLED.FormTitle>
                <STYLED.StyledForm onSubmit={this.SubmitAddFriend}>
                    <STYLED.InputFlex>
                        <STYLED.InputDivForm>
                            <STYLED.StyledInputForm type="text" onChange={this.onChangeText} name="name" placeholder="Skriv in namn" />
                        </STYLED.InputDivForm>
                        <STYLED.InputDivForm>
                            <STYLED.StyledInputForm type="text" onChange={this.onChangeText} name="adress" placeholder="Skriv in adress" />
                        </STYLED.InputDivForm>
                    </STYLED.InputFlex>
                    <STYLED.SubmitInputForm>Sicka in</STYLED.SubmitInputForm>
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
                    </> : null}
                <STYLED.DivButton>
                    <STYLED.SendButton onClick={this.userSentPay}>Sicka till dig själv</STYLED.SendButton>
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
