import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { LoadOrder } from '../../action/orderAction';
import * as STYLED from './style'
import { PAY_PAGE, USER_PAY, MENUE } from '../../constants/routes'
export class UserInstructPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allState: '',
            instructions: '',
            loading: false
        }
    }
    componentDidMount() {
        const localOrder = JSON.parse(localStorage.getItem('order'))
        if (localOrder === null) {
            // no order in localstorage
            this.props.history.push(MENUE)
        } else {
            // has order in localstorage
            this.props.LoadOrder(localOrder)
            this.setState({ loading: true, allState: localOrder })
        }
    }
    onChangeText = e => {
        // change text
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = () => {
        // submit all instructions
        const allofState = this.state.allState
        delete allofState.loading
        const userObj = {
            instructions: this.state.instructions,
            ...allofState
        }
        localStorage.setItem("order", JSON.stringify(userObj))
        this.props.history.push(PAY_PAGE)
    }
    render() {
        const { loading, instructions } = this.state
        return (
            <STYLED.FullPage className="page">
                {loading ? <>
                    <STYLED.TitlePage>Leverans instruktioner</STYLED.TitlePage>
                    <STYLED.InputDiv>
                        <STYLED.StyledInput type="text"
                            name="instructions"
                            onChange={this.onChangeText}
                            value={instructions}
                            placeholder="Skriv in instruktioner"
                        />
                        <STYLED.DivButton>
                            <STYLED.BackButton to={USER_PAY}>Tillbaka</STYLED.BackButton>
                            <STYLED.SubmitButton onClick={this.onSubmit}>Vidare</STYLED.SubmitButton>
                        </STYLED.DivButton>
                    </STYLED.InputDiv>
                </> : null}
            </STYLED.FullPage>
        )
    }
}
const mapStateToProps = state => ({
    userAuth: state.authUserRedux.user,
})


export default connect(mapStateToProps, { LoadOrder })(withRouter(UserInstructPage))

