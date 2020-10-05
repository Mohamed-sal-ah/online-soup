import React, { Component } from 'react'

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
            <div id="page 1">
                <h1>Page 1</h1>
                <h1>Ta bort något</h1>
                <div>
                    <h6>Bönor</h6>
                    <input type="checkbox" name="beans" onChange={this.onCheckBoxChange} defaultChecked={beans} />
                </div>
                <div>
                    <h6>Potatis</h6>
                    <input type="checkbox" name="potatoes" onChange={this.onCheckBoxChange} defaultChecked={potatoes} />
                </div>
                <div>
                    <h6>Paprika</h6>
                    <input type="checkbox" name="pepper" onChange={this.onCheckBoxChange} defaultChecked={pepper} />
                </div>
                <div>
                    <h6>Lök</h6>
                    <input type="checkbox" name="garlic" onChange={this.onCheckBoxChange} defaultChecked={garlic} />
                </div>
                <div>
                    <h6>Mjölk</h6>
                    <input type="checkbox" name="milk" onChange={this.onCheckBoxChange} defaultChecked={milk} />
                </div>
            </div>
        )
    }
}

export default Page1