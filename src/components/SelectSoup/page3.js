import React, { Component } from 'react'

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
            <div id="page 3">
                <h1>Page 3</h1>
                <div>
                    <h6>Varm</h6>
                    <input type="radio" name="warm" checked={warmBool} onChange={this.onChangeRadio}></input>
                </div>
                <div>
                    <h6>Kall</h6>
                    <input type="radio" name="cold" checked={coldBool} onChange={this.onChangeRadio}></input>
                </div>
            </div>
        )
    }
}

export default Page3