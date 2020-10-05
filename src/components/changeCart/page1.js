import React, { Component } from 'react'

class Page1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }
    componentDidMount() {
        const allRemoveInfo = this.props.pageValues
        this.setState({ loading: true, ...allRemoveInfo.remove })

    }
    onCheckBoxChange = e => {
        const changeName = e.target.name;
        const allRemoveInfo = this.props.pageValues
        const changeBooleand = !this.state[changeName]
        this.setState({ [changeName]: changeBooleand })
        this.props.onChangePage(1, { remove: { ...allRemoveInfo.remove, [changeName]: changeBooleand } })
    }
    render() {
        const { loading, beans, potatoes, pepper, garlic, milk } = this.state
        return (
            <div id="page 1">
                {loading ? <>
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
                </> : <p>Loading...</p>}

            </div>
        )
    }
}

export default Page1