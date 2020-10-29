import React, { Component } from 'react'
import { LANDING } from '../../constants/routes'
import { compose } from 'recompose';
import { connect } from 'react-redux'
import { LoadOrder, ClearOrder } from '../../action/orderAction';
import { withRouter } from "react-router-dom";
import * as STYLED from './styled'

class DeliveryStatus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allPayInfo: '',
            adress: '',
            loaded: false,
            ShowPriceDetails: false,
        }
    }
    componentDidMount() {
        const localOrder = JSON.parse(localStorage.getItem('order'))
        const guest = JSON.parse(localStorage.getItem('guest'))
        if (guest !== null) {
            this.setState({ adress: guest.adress, username: guest.username })
        } else {
            this.setState({ adress: localOrder.delivery.adress })
        }
        if (localOrder === null) {
            this.props.history.push(LANDING)
        } else {
            this.props.LoadOrder(localOrder)
            this.setState({ loaded: true, allPayInfo: localOrder })
        }
    }

    onTogglePriceDetails = () => {
        const bool = !this.state.ShowPriceDetails
        this.setState({ ShowPriceDetails: bool })
    }

    onClickBack = () => {
        this.props.ClearOrder()
        localStorage.removeItem('order')
        this.props.history.push(LANDING)
    }
    render() {
        const { loaded, allPayInfo, adress, username, ShowPriceDetails } = this.state
        return (
            <STYLED.FullPage className="page">
                {loaded ? <>
                    <STYLED.TitlePage>Tack för din beställing</STYLED.TitlePage>
                    <STYLED.StatusTitle>En bekräftelse är skickad till din epost</STYLED.StatusTitle>
                    <STYLED.AllInfoDiv>
                        <STYLED.StatusDiv>
                            <STYLED.StatusTitle>Din mat tillagas nu</STYLED.StatusTitle>
                            <STYLED.StatusText>Estimerad leverans tid: kl 20:00</STYLED.StatusText>
                        </STYLED.StatusDiv>
                        <STYLED.DeliveryAdressDiv>
                            <STYLED.DeliveryTitle>Levereras till</STYLED.DeliveryTitle>
                            <STYLED.AdressDiv>
                                {allPayInfo.hasOwnProperty("username") ? <>
                                    {allPayInfo.delivery.hasOwnProperty("to") ?
                                        <STYLED.NameAndPriceText>
                                            {allPayInfo.delivery.to}
                                        </STYLED.NameAndPriceText> : <STYLED.NameAndPriceText>
                                            {allPayInfo.username}
                                        </STYLED.NameAndPriceText>}
                                </> : <STYLED.NameAndPriceText>
                                        {username}
                                    </STYLED.NameAndPriceText>}
                                <STYLED.NameAndPriceText>{adress}</STYLED.NameAndPriceText>
                            </STYLED.AdressDiv>
                        </STYLED.DeliveryAdressDiv>
                        <STYLED.PaymentSummary>
                            <STYLED.PriceTotalDiv>
                                <STYLED.PriceText>Min beställing {allPayInfo.totalPrice} :-</STYLED.PriceText>
                                <STYLED.ToggleButton onClick={this.onTogglePriceDetails} style={{ transform: `rotateX(${ShowPriceDetails ? '180deg' : '0deg'})` }}>
                                    <STYLED.ArrowSymbol />
                                </STYLED.ToggleButton>
                            </STYLED.PriceTotalDiv>
                            {ShowPriceDetails ?
                                <STYLED.ExtraPriceInfo>
                                    <STYLED.PriceText>Levereras kostnad {allPayInfo.deliveryCost} :-</STYLED.PriceText>
                                    <STYLED.PriceText>Soppan och tillbehör kostnad {allPayInfo.allSoupCost} :-</STYLED.PriceText>
                                    {allPayInfo.allCart.map((cart, index) => (
                                        <React.Fragment key={index}>
                                            <br />
                                            <STYLED.PriceText>{cart.howMany}st {cart.name}</STYLED.PriceText>
                                            {Object.keys(cart.remove).map((keyName, index) => {
                                                if (Object.values(cart.remove)[index] === true) {
                                                    return <STYLED.PriceText key={index}>Utan {keyName}</STYLED.PriceText>
                                                }
                                                return null
                                            }
                                            )}
                                            {Object.keys(cart.accessories).map((keyName, index) => {
                                                if (Object.values(cart.accessories)[index] > 0) {
                                                    return <STYLED.PriceText key={index}>{Object.values(cart.accessories)[index]}st {keyName}</STYLED.PriceText>
                                                }
                                                return null
                                            }
                                            )}
                                            {Object.keys(cart.drinks).map((keyName, index) => {
                                                if (Object.values(cart.drinks)[index] > 0) {
                                                    return <STYLED.PriceText key={index}>{Object.values(cart.drinks)[index]}st {keyName}</STYLED.PriceText>
                                                }
                                                return null
                                            }
                                            )}
                                        </React.Fragment>
                                    ))}
                                </STYLED.ExtraPriceInfo>
                                : null}
                        </STYLED.PaymentSummary>
                        <STYLED.SoupRewardOuter>
                            <STYLED.RewardCupong />
                        </STYLED.SoupRewardOuter>
                    </STYLED.AllInfoDiv>
                    <STYLED.DivButton>
                        <STYLED.BackButton onClick={this.onClickBack}>Tillbaka</STYLED.BackButton>
                    </STYLED.DivButton>
                </> : null}
            </STYLED.FullPage>
        )
    }
}
const mapStateToProps = state => ({
    order: state.orderRedux.order,
})

export default connect(mapStateToProps, { LoadOrder, ClearOrder })(compose(withRouter)(DeliveryStatus))
