import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";
import { LoadCart, ClearCart, RemoveCart } from '../../action/cartAction';
import { LoadOrder } from '../../action/orderAction';
import { MENUE, PAY_PAGE } from '../../constants/routes';

class ShoppingCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allCart: [],
            loaded: false,
            deliveryCost: 20,
            allSoupCost: 0,
            totalPrice: 0,
        }
    }

    componentDidMount() {
        const propsCart = this.props.cart
        let total = this.state.totalPrice
        let SoupCost = this.state.allSoupCost
        console.log(propsCart.length);
        const localCart = JSON.parse(localStorage.getItem('cart'))
        if (propsCart.length === 0 && localCart === null) {
            this.props.history.push(MENUE)
        } else {
            if (propsCart.length > 0) {
                propsCart.forEach(item => {
                    SoupCost += item.totalPrice
                    console.log(propsCart);
                    total = total + item.totalPrice + this.state.deliveryCost
                })
                this.setState({ allCart: propsCart, loaded: true, allSoupCost: SoupCost, totalPrice: total })
                return
            } else {
                localCart.forEach(item => {
                    SoupCost += item.totalPrice
                    total = total + item.totalPrice + this.state.deliveryCost
                })
                this.props.LoadCart(localCart)
                this.setState({ allCart: localCart, loaded: true, allSoupCost: SoupCost, totalPrice: total })
                return
            }
        }
    }
    deleteCart = (keyID) => {
        console.log(keyID);
        const allStateCart = this.state.allCart
        allStateCart.splice(keyID, 1)
        console.log(allStateCart.length);
        this.props.RemoveCart(keyID)
        if (allStateCart.length === 0) {
            localStorage.removeItem("cart")
            this.props.history.push(MENUE)
        } else {
            this.setState({ allCart: allStateCart })
            localStorage.setItem("cart", JSON.stringify(allStateCart))
        }

    }
    toPayPage = () => {
        const allState = this.state
        delete allState.loaded
        console.log(allState);
        this.props.ClearCart()
        this.props.LoadOrder(allState)
        localStorage.setItem("order", JSON.stringify(allState))
        localStorage.setItem('order', JSON.stringify(allState))
        this.props.history.push(PAY_PAGE)
    }
    render() {
        console.log(this.state.allCart);
        const { loaded, allCart, allSoupCost, totalPrice, deliveryCost } = this.state
        return (
            <div>
                <h1>test cart</h1>
                {loaded ? <>
                    <div>
                        <h3>Price</h3>
                        <p>Delsumma : {allSoupCost}</p>
                        <p>Leverans kostnad : {deliveryCost}</p>
                        <p>Total Cost :{totalPrice}</p>
                    </div>
                    <ul>

                        {allCart.map((item, index) =>
                            (
                                <li key={index}>

                                    <p>{item.name}</p>
                                    {Object.keys(item.remove).map((keyName, index) => {
                                        if (Object.values(item.remove)[index] === true) {
                                            return <p key={index}>Utan {keyName}</p>
                                        }
                                        return null
                                    }
                                    )}
                                    {Object.keys(item.accessories).map((keyName, index) => {
                                        if (Object.values(item.accessories)[index] > 0) {
                                            return <p key={index}>{Object.values(item.accessories)[index]}st {keyName}</p>
                                        }
                                        return null
                                    }
                                    )}
                                    {Object.keys(item.drinks).map((keyName, index) => {
                                        if (Object.values(item.drinks)[index] > 0) {
                                            return <p key={index}>{Object.values(item.drinks)[index]}st {keyName}</p>
                                        }
                                        return null
                                    }
                                    )}
                                    <button onClick={() => this.deleteCart(index)} >Delete Cart</button>
                                    <Link to={`/cart/${index}`} >Change</Link>
                                </li>
                            ))}
                    </ul>
                    <Link to={MENUE}>Keep Shopping</Link>
                    <button onClick={this.toPayPage}>Pay</button>
                </> : 'Loading'}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cart: state.cart
})


export default connect(mapStateToProps, { LoadCart, ClearCart, LoadOrder, RemoveCart })(withRouter(ShoppingCart))
