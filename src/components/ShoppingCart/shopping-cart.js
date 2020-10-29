import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { LoadCart, ClearCart, ChangeCart, RemoveCart } from '../../action/cartAction';
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
        const localCart = JSON.parse(localStorage.getItem('cart'))
        if (propsCart.length === 0 && localCart === null) {
            // no item in cart
            this.props.history.push(MENUE)
        } else {
            if (propsCart.length > 0) {
                // cart in redux
                propsCart.forEach(item => {
                    SoupCost = SoupCost + item.totalPrice
                    total = total + item.totalPrice + this.state.deliveryCost
                })
                this.setState({ allCart: propsCart, loaded: true, allSoupCost: SoupCost, totalPrice: total })
                return
            } else {
                // cart in localstorage
                localCart.forEach(item => {
                    SoupCost = SoupCost + item.totalPrice
                    total = total + item.totalPrice + this.state.deliveryCost
                })
                this.props.LoadCart(localCart)
                this.setState({ allCart: localCart, loaded: true, allSoupCost: SoupCost, totalPrice: total })
                return
            }
        }
    }
    deleteCart = (keyID) => {
        // delete cart
        const allStateCart = this.state.allCart
        allStateCart.splice(keyID, 1)
        this.props.RemoveCart(keyID)
        if (allStateCart.length === 0) {
            localStorage.removeItem("cart")
            this.props.history.push(MENUE)
        } else {
            this.setState({ allCart: allStateCart })
            localStorage.setItem("cart", JSON.stringify(allStateCart))
        }

    }
    AddSoupNumber = e => {
        // add soup number
        const numberIDString = e.target.parentNode.id
        const allCart = this.state.allCart
        const numberID = parseInt(numberIDString)
        const addNumber = this.state.allCart[numberID].howMany + 1
        const UpdateCart = allCart.map((cart, index) => {
            if (index === numberID) {
                const newSoupPrice = cart.soupPrice + 62
                const total = cart.totalPrice + 62
                return { ...cart, howMany: addNumber, soupPrice: newSoupPrice, totalPrice: total }
            } else {
                return { ...cart }
            }
        })
        const totalPriceSoup = this.state.totalPrice + 62
        const allPriceSoup = this.state.allSoupCost + 62
        this.setState({ allCart: UpdateCart, totalPrice: totalPriceSoup, allSoupCost: allPriceSoup })

    }
    RemoveSoupNumber = e => {
        // remove soup number
        const numberIDString = e.target.parentNode.id
        const allCart = this.state.allCart
        const numberID = parseInt(numberIDString)
        const removeNumber = this.state.allCart[numberID].howMany - 1
        const UpdateCart = allCart.map((cart, index) => {
            if (index === numberID) {
                const newSoupPrice = cart.soupPrice - 62
                const total = cart.totalPrice - 62
                return { ...cart, howMany: removeNumber, soupPrice: newSoupPrice, totalPrice: total }
            } else {
                return { ...cart }
            }
        })
        const totalPriceSoup = this.state.totalPrice - 62
        const allPriceSoup = this.state.allSoupCost - 62
        this.setState({ allCart: UpdateCart, totalPrice: totalPriceSoup, allSoupCost: allPriceSoup })

    }
    saveBackButton = () => {
        // save and back to menue
        localStorage.setItem('cart', JSON.stringify(this.state.allCart))
        this.props.ChangeCart(this.state.allCart)
        this.props.history.push(MENUE)
    }

    toAllPay = () => {
        // all submit to user status
        const allState = this.state
        delete allState.loaded
        delete allState.isUser
        this.props.ClearCart()
        this.props.LoadOrder(allState)
        localStorage.setItem("order", JSON.stringify(allState))
        localStorage.setItem('order', JSON.stringify(allState))
        this.props.history.push(USER_STATUS)
    }
    render() {
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
                                        <STYLED.PriceButtonDiv>
                                            <STYLED.PriceText>{item.totalPrice} :-</STYLED.PriceText>
                                            <STYLED.ButtonAndValueDiv id={index}>
                                                <STYLED.PlusSign onClick={this.AddSoupNumber} />
                                                <STYLED.AmountNumber>{item.howMany}</STYLED.AmountNumber>
                                                <STYLED.MinusSign onClick={this.RemoveSoupNumber} disabled={item.howMany <= 1} />
                                            </STYLED.ButtonAndValueDiv>
                                        </STYLED.PriceButtonDiv>
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
                                        <STYLED.DeleteButton onClick={() => this.deleteCart(index)} >Ta bort</STYLED.DeleteButton>
                                        <STYLED.ChangeCartButton to={`/cart/${index}`} >Ändra</STYLED.ChangeCartButton>
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
                            <STYLED.TotalPriceText>Total kostnad</STYLED.TotalPriceText>
                            <STYLED.TotalPriceText>{totalPrice} :-</STYLED.TotalPriceText>
                        </STYLED.PriceSectionDiv>
                    </STYLED.TotalPricePriceDiv>
                    <STYLED.DivButton>
                        <STYLED.BackButton onClick={this.saveBackButton} >Tillbaka</STYLED.BackButton>
                        <STYLED.SubmitButton onClick={this.toAllPay}>Vidare</STYLED.SubmitButton>
                    </STYLED.DivButton>

                </> : null}
            </STYLED.FullPage>
        )
    }
}
const mapStateToProps = state => ({
    cart: state.cart,
})


export default connect(mapStateToProps, { LoadCart, ClearCart, ChangeCart, LoadOrder, RemoveCart })(withRouter(ShoppingCartPage))
