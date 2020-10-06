import React, { Component } from 'react'
class Page2
    extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soupPrice: 62,
            totalPrice: 62,
            extraPrice: 0,
            accessories: {
                bread: 0,
                cremeFreche: 0,
            },
            drinks: {
                mineralWater: 0,
                cocoNutWater: 0,
                orangeJuice: 0,
                appleJuice: 0,
                loka: 0,
            }
        }
    }
    componentDidMount() {
        this.props.onChangePage(2, { ...this.state })
        const selectSoupPrice = this.props.soupPrice
        this.setState({ soupPrice: selectSoupPrice, totalPrice: selectSoupPrice })
    }

    onSubractNumber = e => {
        const state = this.state
        delete state.loading
        const allState = state
        const nameID = e.target.parentNode.id
        let allPrice = this.state.totalPrice
        let extraPrice = this.state.extraPrice
        if (nameID === "bread" || nameID === "cremeFreche") {
            if (this.state.accessories[nameID] < 1) {
                return
            }
            allPrice = allPrice - 15
            extraPrice = extraPrice - 15
            const number = this.state.accessories[nameID] - 1
            allState.accessories[nameID] = number
            allState.extraPrice = extraPrice
            allState.totalPrice = allPrice
            this.setState({ loading: true, ...allState })
            this.props.onChangePage(2, { ...allState })
        } else {
            if (this.state.drinks[nameID] < 1) {
                return
            }
            allPrice = allPrice - 10
            extraPrice = extraPrice - 10
            const number = this.state.drinks[nameID] - 1
            allState.drinks[nameID] = number
            allState.extraPrice = extraPrice
            allState.totalPrice = allPrice
            this.setState({ loading: true, ...allState })
            this.props.onChangePage(2, { ...allState })
        }
    }

    onAddNumber = e => {
        const state = this.state
        delete state.loading
        const allState = state
        const nameID = e.target.parentNode.id
        let allPrice = this.state.totalPrice
        let extraPrice = this.state.extraPrice
        if (nameID === "bread" || nameID === "cremeFreche") {
            allPrice = allPrice + 15
            extraPrice = extraPrice + 15
            const number = this.state.accessories[nameID] + 1
            allState.accessories[nameID] = number
            allState.extraPrice = extraPrice
            allState.totalPrice = allPrice
            this.setState({ loading: true, ...allState })
            this.props.onChangePage(2, { ...allState })
        } else {
            allPrice = allPrice + 10
            extraPrice = extraPrice + 10
            const number = this.state.drinks[nameID] + 1
            allState.drinks[nameID] = number
            allState.extraPrice = extraPrice
            allState.totalPrice = allPrice
            this.setState({ loading: true, ...allState })
            this.props.onChangePage(2, { ...allState })
        }
    }

    render() {
        const {
            soupPrice,
            extraPrice,
            totalPrice,
            accessories,
            drinks
        } = this.state
        return (
            <div id="page 2">
                <h1>Page 2</h1>
                <h4>Summa</h4>
                <p>Soppan: {soupPrice}</p>
                <p>Tillbehör: {extraPrice}</p>
                <p>Totalt: {totalPrice}</p>
                <h1>Lägg till något</h1>

                <h5>Tillbehör</h5>
                <div id="bread">
                    <h6>Bröd</h6>
                    <h6>15:-</h6>
                    <button onClick={this.onAddNumber}>+</button>
                    <p>{accessories.bread}</p>
                    <button onClick={this.onSubractNumber}>-</button>
                </div>
                <div id="cremeFreche">
                    <h6>Creme Freche</h6>
                    <h6>15:-</h6>
                    <button onClick={this.onAddNumber} >+</button>
                    <p>{accessories.cremeFreche}</p>
                    <button onClick={this.onSubractNumber}>-</button>
                </div>
                <h5>Dryck</h5>
                <div id="mineralWater">
                    <h6>Mineral vatten</h6>
                    <h6>10:-</h6>
                    <button onClick={this.onAddNumber}>+</button>
                    <p>{drinks.mineralWater}</p>
                    <button onClick={this.onSubractNumber}>-</button>
                </div>
                <div id="cocoNutWater">
                    <h6>Kokos vatten</h6>
                    <h6>10:-</h6>
                    <button onClick={this.onAddNumber}>+</button>
                    <p>{drinks.cocoNutWater}</p>
                    <button onClick={this.onSubractNumber}>-</button>
                </div>
                <div id="orangeJuice">
                    <h6>Apelsin Juice</h6>
                    <h6>10:-</h6>
                    <button onClick={this.onAddNumber}>+</button>
                    <p>{drinks.orangeJuice}</p>
                    <button onClick={this.onSubractNumber}>-</button>
                </div>
                <div id="appleJuice">
                    <h6>Äpple Juice</h6>
                    <h6>10:-</h6>
                    <button onClick={this.onAddNumber}>+</button>
                    <p>{drinks.appleJuice}</p>
                    <button onClick={this.onSubractNumber}>-</button>
                </div>
                <div id="loka">
                    <h6>Loka</h6>
                    <h6>10:-</h6>
                    <button onClick={this.onAddNumber}>+</button>
                    <p>{drinks.loka}</p>
                    <button onClick={this.onSubractNumber}>-</button>
                </div>
            </div>
        )
    }
}

export default Page2

