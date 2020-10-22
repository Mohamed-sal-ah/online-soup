import React, { Component } from 'react'
import * as STYLED from './style'
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
            <STYLED.ItemUL>
                <STYLED.NameAndAdressText>{friend.name}</STYLED.NameAndAdressText>
                <STYLED.NameAndAdressText>{friend.adress}</STYLED.NameAndAdressText>
                <STYLED.ListItemButtons>
                    {showMessageInput ? <STYLED.InputDiv>
                        <STYLED.StyledInput type="text" name="message" placeholder="Send Message" onChange={this.onMessageChange} />
                        <STYLED.SubmitInput onClick={this.sendMessage}>Send Message</STYLED.SubmitInput>
                    </STYLED.InputDiv> : <STYLED.SendWithoutMessageButtton onClick={this.noMessage} >Send Without message</STYLED.SendWithoutMessageButtton>}
                    <STYLED.ToggleMessaseButton onClick={this.onToggleInput}>ToggleMessage</STYLED.ToggleMessaseButton>
                </STYLED.ListItemButtons>
            </STYLED.ItemUL>
        )
    }
}

export default SingleFriend
