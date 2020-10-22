import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { PAY_PAGE, SHOPPING_CART, USER_STATUS } from '../../constants/routes'
import * as STYLED from './style'
class GuestUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adress: '',
            username: '',
            phone: '',
            email: '',
            instructions: '',
            loading: false
        }
    }
    componentDidMount() {
        console.log(this.props.userAuth);
        if (this.props.userAuth === null || this.props.userAuth === '') {
            const guestLocal = JSON.parse(localStorage.getItem('guest'))
            if (guestLocal !== null) {
                this.setState({ adress: guestLocal.adress, loading: true })
            } else {
                this.setState({ loading: true })
            }
        } else {
            this.props.history.push(SHOPPING_CART)
        }
    }
    onChangeText = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onAdressSubmit = () => {
        const allState = this.state
        delete allState.loading
        console.log(this.state.adress);
        const GuestObj = {
            userID: "GUEST",
            ...allState
        }
        localStorage.setItem("guest", JSON.stringify(GuestObj))
        this.props.history.push(PAY_PAGE)
    }
    render() {
        const { adress, username, email, phone, loading, instructions } = this.state
        return (
            <STYLED.FullPage className="page">
                {loading ? <>
                    <STYLED.TitlePage>Guest User</STYLED.TitlePage>
                    <STYLED.InputDiv>
                        <STYLED.StyledInput type="text"
                            name="adress"
                            onChange={this.onChangeText}
                            value={adress}
                            placeholder="Type in adress"
                        />
                        <STYLED.StyledInput type="text"
                            name="username"
                            onChange={this.onChangeText}
                            value={username}
                            placeholder="Type in Full Name"
                        />
                        <STYLED.StyledInput type="text"
                            name="email"
                            onChange={this.onChangeText}
                            value={email}
                            placeholder="Type in Email"
                        />
                        <STYLED.StyledInput type="text"
                            name="phone"
                            onChange={this.onChangeText}
                            value={phone}
                            placeholder="Type in Phone"
                        />
                        <STYLED.StyledInput type="text"
                            name="instructions"
                            onChange={this.onChangeText}
                            value={instructions}
                            placeholder="Type in Instuctions"
                        />
                        <STYLED.DivButton>
                            <STYLED.BackButton to={USER_STATUS}>Back</STYLED.BackButton>
                            <STYLED.SubmitButton onClick={this.onAdressSubmit}>Submit Adress</STYLED.SubmitButton>
                        </STYLED.DivButton>
                    </STYLED.InputDiv>
                </> : <p>Loading...</p>}
            </STYLED.FullPage>
        )
    }
}
const mapStateToProps = state => ({
    userAuth: state.authUserRedux.user,
})

export default connect(mapStateToProps, {})(withRouter(GuestUser))
