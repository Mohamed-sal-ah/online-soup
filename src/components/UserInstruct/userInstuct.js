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
        console.log(localOrder);
        if (localOrder === null) {
            this.props.history.push(MENUE)
        } else {
            this.props.LoadOrder(localOrder)
            this.setState({ loading: true, allState: localOrder })
        }
    }
    onChangeText = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onAdressSubmit = () => {
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
                    <STYLED.TitlePage>Add instructions</STYLED.TitlePage>
                    <STYLED.InputDiv>
                        <STYLED.StyledInput type="text"
                            name="instructions"
                            onChange={this.onChangeText}
                            value={instructions}
                            placeholder="Type in Instuctions"
                        />
                        <STYLED.DivButton>
                            <STYLED.BackButton to={USER_PAY}>Back</STYLED.BackButton>
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


export default connect(mapStateToProps, { LoadOrder })(withRouter(UserInstructPage))

