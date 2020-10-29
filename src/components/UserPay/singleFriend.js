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
        // onchange message
        const valueText = e.target.value
        this.setState({ [`${e.target.name}`]: valueText })
    }
    sendMessage = () => {
        // submit message
        const mess = this.state.message
        this.props.sendOrder(this.props.idNumb, mess)
    }

    noMessage = () => {
        // send without message
        this.props.sendOrder(this.props.idNumb, null)
    }
    onToggleInput = () => {
        // toggle message input
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
                        <STYLED.StyledInput type="text" name="message" placeholder="Skriv in meddelande" onChange={this.onMessageChange} />
                        <STYLED.SubmitInput onClick={this.sendMessage}>Sicka meddelande</STYLED.SubmitInput>
                    </STYLED.InputDiv> : <STYLED.SendWithoutMessageButtton onClick={this.noMessage} >Sicka utan meddelande</STYLED.SendWithoutMessageButtton>}
                    <STYLED.ToggleMessaseButton onClick={this.onToggleInput}>{showMessageInput ? "Gömn inmating" : "Visa inmating"}</STYLED.ToggleMessaseButton>
                </STYLED.ListItemButtons>
            </STYLED.ItemUL>
        )
    }
}

export default SingleFriend
