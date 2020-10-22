import React, { Component } from 'react'
import { TitlePage } from './style'
import * as STYLED from './pages-style'
class Page1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beans: false,
            potatoes: false,
            pepper: false,
            garlic: false,
            milk: false
        }
    }
    componentDidMount() {
        this.props.onChangePage(1, { remove: { ...this.state } })
    }
    onCheckBoxChange = e => {
        const changeName = e.target.name;
        const changeBooleand = !this.state[changeName]
        this.setState({ [changeName]: changeBooleand })
        this.props.onChangePage(1, { remove: { ...this.state, [changeName]: changeBooleand } })
    }
    render() {
        const { beans, potatoes, pepper, garlic, milk } = this.state
        return (
            <STYLED.Page1TitleOptions>
                <TitlePage>Ta bort något</TitlePage>
                <STYLED.Page1NameOptionDiv>
                    <STYLED.Page1OptionTitle>Bönor</STYLED.Page1OptionTitle>
                    <STYLED.Page1NameOptionLabel>
                        <STYLED.Page1CustomOptionInput type="checkbox" name="beans" onChange={this.onCheckBoxChange} defaultChecked={beans} />
                        <STYLED.Page1CustomChecked />
                    </STYLED.Page1NameOptionLabel>
                </STYLED.Page1NameOptionDiv>
                <STYLED.Page1NameOptionDiv>
                    <STYLED.Page1OptionTitle>Potatis</STYLED.Page1OptionTitle>
                    <STYLED.Page1NameOptionLabel>
                        <STYLED.Page1CustomOptionInput type="checkbox" name="potatoes" onChange={this.onCheckBoxChange} defaultChecked={potatoes} />
                        <STYLED.Page1CustomChecked />
                    </STYLED.Page1NameOptionLabel>
                </STYLED.Page1NameOptionDiv>
                <STYLED.Page1NameOptionDiv>
                    <STYLED.Page1OptionTitle>Paprika</STYLED.Page1OptionTitle>
                    <STYLED.Page1NameOptionLabel>
                        <STYLED.Page1CustomOptionInput type="checkbox" name="pepper" onChange={this.onCheckBoxChange} defaultChecked={pepper} />
                        <STYLED.Page1CustomChecked />
                    </STYLED.Page1NameOptionLabel>
                </STYLED.Page1NameOptionDiv>
                <STYLED.Page1NameOptionDiv>
                    <STYLED.Page1OptionTitle>Lök</STYLED.Page1OptionTitle>
                    <STYLED.Page1NameOptionLabel>
                        <STYLED.Page1CustomOptionInput type="checkbox" name="garlic" onChange={this.onCheckBoxChange} defaultChecked={garlic} />
                        <STYLED.Page1CustomChecked />
                    </STYLED.Page1NameOptionLabel>
                </STYLED.Page1NameOptionDiv>
                <STYLED.Page1NameOptionDiv>
                    <STYLED.Page1OptionTitle>Mjölk</STYLED.Page1OptionTitle>
                    <STYLED.Page1NameOptionLabel>
                        <STYLED.Page1CustomOptionInput type="checkbox" name="milk" onChange={this.onCheckBoxChange} defaultChecked={milk} />
                        <STYLED.Page1CustomChecked />
                    </STYLED.Page1NameOptionLabel>
                </STYLED.Page1NameOptionDiv>
            </STYLED.Page1TitleOptions>
        )
    }
}

export default Page1