import React, { Component } from 'react'
import { TitlePage } from './style'
import * as STYLED from './pages-style'
class Page3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            temprature: "warm",
            warmBool: true,
            coldBool: false
        }
    }
    componentDidMount() {
        this.props.onChangePage(3, { temprature: this.state.temprature })
    }
    onChangeRadio = e => {
        const nameOfButton = e.target.name
        if (nameOfButton === 'cold') {
            this.setState({ warmBool: false, coldBool: true, temprature: 'cold' })
            this.props.onChangePage(3, { temprature: 'cold' })
        } else {
            this.setState({ warmBool: true, coldBool: false, temprature: 'warm' })
            this.props.onChangePage(3, { temprature: 'warm' })
        }
    }
    render() {
        const { warmBool, coldBool } = this.state
        return (
            <STYLED.Page3TitleRadioSection>
                <TitlePage>Hur vill du ha soppan</TitlePage>
                <STYLED.Page3NameRadioButtonDiv >
                    <STYLED.Page3RadioTitle>Varm</STYLED.Page3RadioTitle>
                    <STYLED.Page3RadioLabel>
                        <STYLED.Page3Input type="radio" name="warm" checked={warmBool} onChange={this.onChangeRadio} />
                        <STYLED.Page3CustomCheckmark />
                    </STYLED.Page3RadioLabel>
                </STYLED.Page3NameRadioButtonDiv >
                <STYLED.Page3NameRadioButtonDiv >
                    <STYLED.Page3RadioTitle>Kall</STYLED.Page3RadioTitle>
                    <STYLED.Page3RadioLabel>
                        <STYLED.Page3Input type="radio" name="cold" checked={coldBool} onChange={this.onChangeRadio} />
                        <STYLED.Page3CustomCheckmark />
                    </STYLED.Page3RadioLabel>
                </STYLED.Page3NameRadioButtonDiv >
            </STYLED.Page3TitleRadioSection>
        )
    }
}

export default Page3