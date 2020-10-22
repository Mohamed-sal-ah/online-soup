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
        }
    }
    componentDidMount() {
        const localOrder = JSON.parse(localStorage.getItem('order'))
        const guest = JSON.parse(localStorage.getItem('guest'))
        if (guest !== null) {
            this.setState({ adress: guest.adress })
        } else {
            this.setState({ adress: localOrder.delivery.adress })
        }
        console.log(localOrder);
        if (localOrder === null) {
            this.props.history.push(LANDING)
        } else {
            this.props.LoadOrder(localOrder)
            this.setState({ loaded: true, allPayInfo: localOrder })
        }
    }
    onClickBack = () => {
        this.props.ClearOrder()
        localStorage.removeItem('order')
        this.props.history.push(LANDING)
    }
    render() {
        const { loaded, allPayInfo, adress } = this.state
        return (
            <STYLED.FullPage className="page">
                {loaded ? <>
                    <STYLED.TitlePage>Status</STYLED.TitlePage>
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
                                </> : "No Name"}
                                <STYLED.NameAndPriceText>{adress}</STYLED.NameAndPriceText>
                            </STYLED.AdressDiv>
                        </STYLED.DeliveryAdressDiv>
                        <STYLED.PaymentSummary>
                            <STYLED.PriceTotalDiv>
                                <STYLED.PriceText>Min Beställing {allPayInfo.totalPrice} :-</STYLED.PriceText>
                            </STYLED.PriceTotalDiv>
                        </STYLED.PaymentSummary>
                    </STYLED.AllInfoDiv>

                    <STYLED.DivButton>
                        <STYLED.BackButton onClick={this.onClickBack}>Back</STYLED.BackButton>
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
