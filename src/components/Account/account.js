import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
import { MENUE } from '../../constants/routes'
import { withFirebase } from '../Firebase'
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
        const user = this.props.userAuth
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
            <div>
                <h1>{this.props.userAuth.username}</h1>
                <p>Email : {this.props.userAuth.email}</p>
                <Link to={MENUE}>Back</Link>
                {loading ? <div>
                    <h5>Add friend</h5>
                    <form onSubmit={this.SubmitAddFriend}>
                        <label>Name</label>
                        <input type="text" onChange={this.onChangeText} name="name" />
                        <label>Adress</label>
                        <input type="text" onChange={this.onChangeText} name="adress" />
                        <button>Submit</button>
                    </form>
                    <ul>
                        {firends.map((item, key) => (
                            <li key={key} >
                                <p>Name : {item.name}</p>
                                <p>Adress : {item.adress}</p>
                                <button onClick={() => this.DeleteFriend(key)}>Delete Friend</button>
                            </li>
                        ))}
                    </ul>
                </div> : <p>Loading</p>}

            </div>
        )
    }
}
const mapStateToProps = state => ({
    userAuth: state.authUserRedux.user,
})

export default connect(mapStateToProps, {})(compose(withFirebase)(AccountPage))