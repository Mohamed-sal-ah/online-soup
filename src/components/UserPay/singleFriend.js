import React, { Component } from 'react'

export class SingleFriend extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            showMessageInput: false
        }
    }
    onMessageChange = e => {
        const valueText = e.target.value
        this.setState({ [`${e.target.name}`]: valueText })
    }
    sendMessage = () => {
        const mess = this.state.message
        this.props.sendOrder(this.props.idNumb, mess)
    }

    noMessage = () => {
        this.props.sendOrder(this.props.idNumb, null)
    }
    onToggleInput = () => {
        const bool = !this.state.showMessageInput
        this.setState({ showMessageInput: bool })
    }
    render() {
        const { showMessageInput } = this.state
        const { friend } = this.props
        return (
            <li>
                <p>{friend.name}</p>
                <p>{friend.adress}</p>
                {showMessageInput ? <div>
                    <input type="text" name="message" onChange={this.onMessageChange} />
                    <button onClick={this.sendMessage}>Send Message</button>
                </div> : <button onClick={this.noMessage} >Send Without message</button>}
                <button onClick={this.onToggleInput}>ToggleMessage</button>
            </li>
        )
    }
}

export default SingleFriend
