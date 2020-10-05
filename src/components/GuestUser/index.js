import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { MENUE } from '../../constants/routes'

class GuestUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adress: '',
            loading: false
        }
    }
    componentDidMount() {
        if (this.props.userAuth !== null) {
            const guestLocal = JSON.parse(localStorage.getItem('guest'))
            if (guestLocal !== null) {
                this.setState({ adress: guestLocal.adress, loading: true })
            } else {
                this.setState({ loading: true })
            }
        } else {
            this.props.push(MENUE)
        }
    }
    onChangeAdress = e => {
        const valueSubmit = e.target.value
        this.setState({ adress: valueSubmit })
    }

    onAdressSubmit = () => {
        console.log(this.state.adress);
        const GuestObj = {
            userID: "GUEST",
            adress: this.state.adress
        }
        localStorage.setItem("guest", JSON.stringify(GuestObj))
        this.props.history.push(MENUE)
    }
    render() {
        const { adress, loading } = this.state
        return (
            <>
                {loading ? <>
                    <h1>Type in adress guest</h1>
                    <div>
                        <input type="text" name="adress" onChange={this.onChangeAdress} value={adress} />
                        <button onClick={this.onAdressSubmit}>Submit Adress</button>
                    </div>
                </> : <p>Loading...</p>}
            </>
        )
    }
}
const mapStateToProps = state => ({
    userAuth: state.authUserRedux.user,
})

export default connect(mapStateToProps, {})(withRouter(GuestUser))
