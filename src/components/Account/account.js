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
            firendsKey: '',
            uID: ''
        }
    }
    componentDidMount() {
        const user = this.props.userAuth
        if (user === null) {
            // Has not logged in
            this.props.history.push(LANDING)
        }
        // user has logged in
        this.setState({ uID: user.userID })
        this.props.firebase.userFirends(user.userID).on('value', snaphot => {
            const dbValues = snaphot.val()
            if (dbValues !== null) {
                // has dbValues
                this.setState({ loading: true, firends: [...Object.values(dbValues)], firendsKey: [...Object.keys(dbValues)] })
            } else {
                // no dbValues
                this.setState({ loading: true, firends: [] })
            }
        })

    }
    onChangeText = e => {
        // change input text
        const valueText = e.target.value
        this.setState({ [`${e.target.name}`]: valueText })
    }
    DeleteFriend = keyID => {
        // delete Friend
        const allFriends = this.state.firends
        const allKeys = this.state.firendsKey
        const user = this.props.userAuth
        allFriends.splice(keyID, 1)
        allKeys.splice(keyID, 1)
        if (allFriends.length <= 0 || allKeys.length <= 0) {
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
            const newOb = {}
            Object.values(newObjArr).forEach(item => newOb[`${Object.keys(item)}`] = {
                ...Object.values(item)[0]
            })
            this.props.firebase.userFirends(user.userID).set({ ...newOb })
        }
    }

    SubmitAddFriend = e => {
        // Add friend
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
    componentWillUnmount() {
        this.props.firebase.userFirends(this.state.uID).off()
    }
    render() {
        const { loading, firends } = this.state
        return (
            <>
                {this.props.userAuth !== null ? <>
                    <STYLED.TitlePage>Konto</STYLED.TitlePage>
                    <HasAdmin />
                    <STYLED.UserInfoAndSignoutButton>
                        <STYLED.UserInfoFlex>
                            <STYLED.UserInfoText>Användar namn : {this.props.userAuth.username}</STYLED.UserInfoText>
                            <STYLED.UserInfoText>Epost adress : {this.props.userAuth.email}</STYLED.UserInfoText>
                        </STYLED.UserInfoFlex>
                        <SignOutButton />
                    </STYLED.UserInfoAndSignoutButton>
                    {loading ? <STYLED.FormAndULDiv>
                        <STYLED.FormTitle>Lägg till vän</STYLED.FormTitle>
                        <STYLED.StyledForm onSubmit={this.SubmitAddFriend}>
                            <STYLED.InputFlex>
                                <STYLED.InputDiv>
                                    <STYLED.StyledInput type="text" onChange={this.onChangeText} name="name" placeholder="Skriv in namn" />
                                </STYLED.InputDiv>
                                <STYLED.InputDiv>
                                    <STYLED.StyledInput type="text" onChange={this.onChangeText} name="adress" placeholder="Skriv in adress" />
                                </STYLED.InputDiv>
                            </STYLED.InputFlex>
                            <STYLED.SubmitInput>Sicka in</STYLED.SubmitInput>
                        </STYLED.StyledForm>
                        <STYLED.FriendsUL>
                            {firends.map((item, key) => (
                                <STYLED.ItemUL key={key} >
                                    <STYLED.AdressAndTextDiv>
                                        <STYLED.SmallInfoText>Namn : {item.name}</STYLED.SmallInfoText>
                                        <STYLED.SmallInfoText>Adress : {item.adress}</STYLED.SmallInfoText>
                                    </STYLED.AdressAndTextDiv>
                                    <STYLED.DeleteButton onClick={() => this.DeleteFriend(key)}>Ta bort vän</STYLED.DeleteButton>
                                </STYLED.ItemUL>
                            ))}
                        </STYLED.FriendsUL>
                    </STYLED.FormAndULDiv> : null}
                </> : null}

                <STYLED.DivButton>
                    <STYLED.BackButton to={USER_PAY}>Tillbaka</STYLED.BackButton>
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
                : null

        }
    </AuthUserContext.Consumer>
)

const mapStateToProps = state => ({
    userAuth: state.authUserRedux.user,
})

export default connect(mapStateToProps, {})(compose(withFirebase)(AccountPage))