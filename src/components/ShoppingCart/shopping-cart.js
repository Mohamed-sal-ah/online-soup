import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { LoadCart, ClearCart, RemoveCart } from '../../action/cartAction';
import { LoadOrder } from '../../action/orderAction';
import { MENUE, USER_STATUS } from '../../constants/routes';
import * as STYLED from './style'

class ShoppingCartPage extends Component {
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
                    SoupCost = SoupCost + item.totalPrice
                    total = total + item.totalPrice + this.state.deliveryCost
                })
                this.setState({ allCart: propsCart, loaded: true, allSoupCost: SoupCost, totalPrice: total })
                return
            } else {
                localCart.forEach(item => {
                    SoupCost = SoupCost + item.totalPrice
                    console.log(item.totalPrice);
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

    toAllPay = () => {
        const allState = this.state
        delete allState.loaded
        delete allState.isUser
        console.log(allState);
        this.props.ClearCart()
        this.props.LoadOrder(allState)
        localStorage.setItem("order", JSON.stringify(allState))
        localStorage.setItem('order', JSON.stringify(allState))
        this.props.history.push(USER_STATUS)
    }
    render() {
        console.log(this.state.allCart);
        const { loaded, allCart, allSoupCost, totalPrice, deliveryCost } = this.state
        return (
            <STYLED.FullPage className="page">
                <STYLED.TitlePage>Varukorgen</STYLED.TitlePage>
                {loaded ? <>
                    <STYLED.CartListUL>
                        {allCart.map((item, index) =>
                            (
                                <STYLED.CartItem key={index}>
                                    <STYLED.PriceAndNameDiv>
                                        <STYLED.NameText>{item.name}</STYLED.NameText>
                                        <STYLED.PriceText>{item.totalPrice} :-</STYLED.PriceText>
                                    </STYLED.PriceAndNameDiv>
                                    <STYLED.ExtraInfoDiv>

                                        {Object.keys(item.remove).map((keyName, index) => {
                                            if (Object.values(item.remove)[index] === true) {
                                                return <STYLED.ExtraInfoText key={index}>Utan {keyName}</STYLED.ExtraInfoText>
                                            }
                                            return null
                                        }
                                        )}
                                        {Object.keys(item.accessories).map((keyName, index) => {
                                            if (Object.values(item.accessories)[index] > 0) {
                                                return <STYLED.ExtraInfoText key={index}>{Object.values(item.accessories)[index]}st {keyName}</STYLED.ExtraInfoText>
                                            }
                                            return null
                                        }
                                        )}
                                        {Object.keys(item.drinks).map((keyName, index) => {
                                            if (Object.values(item.drinks)[index] > 0) {
                                                return <STYLED.ExtraInfoText key={index}>{Object.values(item.drinks)[index]}st {keyName}</STYLED.ExtraInfoText>
                                            }
                                            return null
                                        }
                                        )}
                                    </STYLED.ExtraInfoDiv>
                                    <STYLED.ListItemButtons>
                                        <STYLED.DeleteButton onClick={() => this.deleteCart(index)} >Delete Cart</STYLED.DeleteButton>
                                        <STYLED.ChangeCartButton to={`/cart/${index}`} >Change</STYLED.ChangeCartButton>
                                    </STYLED.ListItemButtons>
                                </STYLED.CartItem>
                            ))}
                    </STYLED.CartListUL>
                    <STYLED.TotalPricePriceDiv>
                        <STYLED.PriceSectionDiv>
                            <STYLED.OtherPriceText>Delsumma</STYLED.OtherPriceText>
                            <STYLED.OtherPriceText>{allSoupCost} :-</STYLED.OtherPriceText>
                        </STYLED.PriceSectionDiv>
                        <STYLED.PriceSectionDiv>
                            <STYLED.OtherPriceText>Leverans kostnad</STYLED.OtherPriceText>
                            <STYLED.OtherPriceText>{deliveryCost} :-</STYLED.OtherPriceText>
                        </STYLED.PriceSectionDiv>
                        <STYLED.PriceSectionDiv>
                            <STYLED.TotalPriceText>Total Cost</STYLED.TotalPriceText>
                            <STYLED.TotalPriceText>{totalPrice} :-</STYLED.TotalPriceText>
                        </STYLED.PriceSectionDiv>
                    </STYLED.TotalPricePriceDiv>
                    <STYLED.DivButton>
                        <STYLED.BackButton to={MENUE}>Back</STYLED.BackButton>
                        <STYLED.SubmitButton onClick={this.toAllPay}>Continue</STYLED.SubmitButton>
                    </STYLED.DivButton>

                </> : 'Loading'}
            </STYLED.FullPage>
        )
    }
}
const mapStateToProps = state => ({
    cart: state.cart,
})


export default connect(mapStateToProps, { LoadCart, ClearCart, LoadOrder, RemoveCart })(withRouter(ShoppingCartPage))
