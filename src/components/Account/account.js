import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { LANDING, USER_PAY, ADMIN_PAGE } from '../../constants/routes'
import { withFirebase } from '../Firebase'
import SignOutButton from '../SignOut'
import * as STYLED from './styled'
import { AuthUserContext } from '../Session'
class AccountPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            firends: '',
            name: '',
            adress: '',
            firendsKey: ''
        }
    }
    componentDidMount() {
        console.log(this.props.userAuth);
        const user = this.props.userAuth
        if (user === null) {
            this.props.history.push(LANDING)
        }
        console.log(user);
        this.props.firebase.userFirends(user.userID).on('value', snaphot => {
            const dbValues = snaphot.val()
            console.log(dbValues);
            if (dbValues !== null) {
                this.setState({ loading: true, firends: [...Object.values(dbValues)], firendsKey: [...Object.keys(dbValues)] })
            } else {
                this.setState({ loading: true, firends: [] })
            }
        })

    }
    onChangeText = e => {
        const valueText = e.target.value
        this.setState({ [`${e.target.name}`]: valueText })
    }
    DeleteFriend = keyID => {
        const allFriends = this.state.firends
        const allKeys = this.state.firendsKey
        const user = this.props.userAuth
        debugger
        allFriends.splice(keyID, 1)
        allKeys.splice(keyID, 1)
        if (allFriends.length <= 0 || allKeys.length <= 0) {
            console.log(allFriends);
            this.props.firebase.userFirends(user.userID).set({})
        } else {
            const newObjArr = []
            allKeys.forEach((item, index) => {
                newObjArr.push({
                    [`${item}`]: {
                        ...allFriends[index]
                    }
                })
            })
            this.props.firebase.userFirends(user.userID).set(...newObjArr)
        }
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
        const { loading, firends } = this.state
        return (
            <>
                {this.props.userAuth !== null ? <>
                    <STYLED.TitlePage>Account</STYLED.TitlePage>
                    <HasAdmin />
                    <STYLED.UserInfoAndSignoutButton>
                        <STYLED.UserInfoFlex>
                            <STYLED.UserInfoText>Username : {this.props.userAuth.username}</STYLED.UserInfoText>
                            <STYLED.UserInfoText>Email : {this.props.userAuth.email}</STYLED.UserInfoText>
                        </STYLED.UserInfoFlex>
                        <SignOutButton />
                    </STYLED.UserInfoAndSignoutButton>
                    {loading ? <STYLED.FormAndULDiv>
                        <STYLED.FormTitle>Add friend</STYLED.FormTitle>
                        <STYLED.StyledForm onSubmit={this.SubmitAddFriend}>
                            <STYLED.InputFlex>
                                <STYLED.InputDiv>
                                    <STYLED.StyledInput type="text" onChange={this.onChangeText} name="name" placeholder="Type In Name" />
                                </STYLED.InputDiv>
                                <STYLED.InputDiv>
                                    <STYLED.StyledInput type="text" onChange={this.onChangeText} name="adress" placeholder="Type In Adress" />
                                </STYLED.InputDiv>
                            </STYLED.InputFlex>
                            <STYLED.SubmitInput>Submit</STYLED.SubmitInput>
                        </STYLED.StyledForm>
                        <STYLED.FriendsUL>
                            {firends.map((item, key) => (
                                <STYLED.ItemUL key={key} >
                                    <STYLED.AdressAndTextDiv>
                                        <STYLED.SmallInfoText>Name : {item.name}</STYLED.SmallInfoText>
                                        <STYLED.SmallInfoText>Adress : {item.adress}</STYLED.SmallInfoText>
                                    </STYLED.AdressAndTextDiv>
                                    <STYLED.DeleteButton onClick={() => this.DeleteFriend(key)}>Delete Friend</STYLED.DeleteButton>
                                </STYLED.ItemUL>
                            ))}
                        </STYLED.FriendsUL>
                    </STYLED.FormAndULDiv> : <p>Loading</p>}
                </> : null}

                <STYLED.DivButton>
                    <STYLED.BackButton to={USER_PAY}>Back</STYLED.BackButton>
                </STYLED.DivButton>
            </>
        )
    }
}

const HasAdmin = ({ authUser }) => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser !== 'loading' ?
                <>
                    {authUser ?
                        <>
                            {authUser.roles && authUser.roles.ADMIN ?
                                <STYLED.AdminLink to={ADMIN_PAGE}>Admin</STYLED.AdminLink> : null}
                        </>
                        : null}
                </>
                : <p>Loading...</p>

        }
    </AuthUserContext.Consumer>
)

const mapStateToProps = state => ({
    userAuth: state.authUserRedux.user,
})

export default connect(mapStateToProps, {})(compose(withFirebase)(AccountPage))