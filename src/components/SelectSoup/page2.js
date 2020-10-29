import React, { Component } from 'react'
import { TitlePage } from './style'
import * as STYLED from './pages-style'
class Page2 extends Component {
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
            <STYLED.Page2TitleSecions>
                <TitlePage>Lägg till något</TitlePage>
                <STYLED.Page2SectionTitleOptionDiv>
                    <STYLED.Page2SectionTitle>Tillbehör</STYLED.Page2SectionTitle>
                    <STYLED.Page2NameOptionDiv>
                        <STYLED.Page2OptionTitle>Bröd</STYLED.Page2OptionTitle>
                        <STYLED.Page2PriceButtonDiv>
                            <STYLED.Page2OptionTitle>15:-</STYLED.Page2OptionTitle>
                            <STYLED.Page2ButtonAndValueDiv id="bread">
                                <STYLED.PlusSign onClick={this.onAddNumber} />
                                <STYLED.AmountNumber>{accessories.bread}</STYLED.AmountNumber>
                                <STYLED.MinusSign onClick={this.onSubractNumber} disabled={accessories.bread <= 0} />
                            </STYLED.Page2ButtonAndValueDiv>
                        </STYLED.Page2PriceButtonDiv>
                    </STYLED.Page2NameOptionDiv>
                    <STYLED.Page2NameOptionDiv>
                        <STYLED.Page2OptionTitle>Creme Freche</STYLED.Page2OptionTitle>
                        <STYLED.Page2PriceButtonDiv>
                            <STYLED.Page2OptionTitle>15:-</STYLED.Page2OptionTitle>
                            <STYLED.Page2ButtonAndValueDiv id="cremeFreche">
                                <STYLED.PlusSign onClick={this.onAddNumber} />
                                <STYLED.AmountNumber>{accessories.cremeFreche}</STYLED.AmountNumber>
                                <STYLED.MinusSign onClick={this.onSubractNumber} disabled={accessories.cremeFreche <= 0} />
                            </STYLED.Page2ButtonAndValueDiv>
                        </STYLED.Page2PriceButtonDiv>
                    </STYLED.Page2NameOptionDiv>
                </STYLED.Page2SectionTitleOptionDiv >
                <STYLED.Page2SectionTitleOptionDiv>
                    <STYLED.Page2SectionTitle>Dryck</STYLED.Page2SectionTitle>
                    <STYLED.Page2NameOptionDiv>
                        <STYLED.Page2OptionTitle>Mineral vatten</STYLED.Page2OptionTitle>
                        <STYLED.Page2PriceButtonDiv>
                            <STYLED.Page2OptionTitle>10:-</STYLED.Page2OptionTitle>
                            <STYLED.Page2ButtonAndValueDiv id="mineralWater">
                                <STYLED.PlusSign onClick={this.onAddNumber} />
                                <STYLED.AmountNumber>{drinks.mineralWater}</STYLED.AmountNumber>
                                <STYLED.MinusSign onClick={this.onSubractNumber} disabled={drinks.mineralWater <= 0} />
                            </STYLED.Page2ButtonAndValueDiv>
                        </STYLED.Page2PriceButtonDiv>
                    </STYLED.Page2NameOptionDiv>
                    <STYLED.Page2NameOptionDiv >
                        <STYLED.Page2OptionTitle>Kokos vatten</STYLED.Page2OptionTitle>
                        <STYLED.Page2PriceButtonDiv>
                            <STYLED.Page2OptionTitle>10:-</STYLED.Page2OptionTitle>
                            <STYLED.Page2ButtonAndValueDiv id="cocoNutWater">
                                <STYLED.PlusSign onClick={this.onAddNumber} />
                                <STYLED.AmountNumber>{drinks.cocoNutWater}</STYLED.AmountNumber>
                                <STYLED.MinusSign onClick={this.onSubractNumber} disabled={drinks.cocoNutWater <= 0} />
                            </STYLED.Page2ButtonAndValueDiv>
                        </STYLED.Page2PriceButtonDiv>
                    </STYLED.Page2NameOptionDiv >
                    <STYLED.Page2NameOptionDiv>
                        <STYLED.Page2OptionTitle>Apelsin Juice</STYLED.Page2OptionTitle>
                        <STYLED.Page2PriceButtonDiv>
                            <STYLED.Page2OptionTitle>10:-</STYLED.Page2OptionTitle>
                            <STYLED.Page2ButtonAndValueDiv id="orangeJuice">
                                <STYLED.PlusSign onClick={this.onAddNumber} />
                                <STYLED.AmountNumber>{drinks.orangeJuice}</STYLED.AmountNumber>
                                <STYLED.MinusSign onClick={this.onSubractNumber} disabled={drinks.orangeJuice <= 0} />
                            </STYLED.Page2ButtonAndValueDiv>
                        </STYLED.Page2PriceButtonDiv>
                    </STYLED.Page2NameOptionDiv >
                    <STYLED.Page2NameOptionDiv >
                        <STYLED.Page2OptionTitle>Äpple Juice</STYLED.Page2OptionTitle>
                        <STYLED.Page2PriceButtonDiv>
                            <STYLED.Page2OptionTitle>10:-</STYLED.Page2OptionTitle>
                            <STYLED.Page2ButtonAndValueDiv id="appleJuice">
                                <STYLED.PlusSign onClick={this.onAddNumber} />
                                <STYLED.AmountNumber>{drinks.appleJuice}</STYLED.AmountNumber>
                                <STYLED.MinusSign onClick={this.onSubractNumber} disabled={drinks.appleJuice <= 0} />
                            </STYLED.Page2ButtonAndValueDiv>
                        </STYLED.Page2PriceButtonDiv>
                    </STYLED.Page2NameOptionDiv >
                    <STYLED.Page2NameOptionDiv>
                        <STYLED.Page2OptionTitle>Loka</STYLED.Page2OptionTitle>
                        <STYLED.Page2PriceButtonDiv>
                            <STYLED.Page2OptionTitle>10:-</STYLED.Page2OptionTitle>
                            <STYLED.Page2ButtonAndValueDiv id="loka">
                                <STYLED.PlusSign onClick={this.onAddNumber} />
                                <STYLED.AmountNumber>{drinks.loka}</STYLED.AmountNumber>
                                <STYLED.MinusSign onClick={this.onSubractNumber} disabled={drinks.loka <= 0} />
                            </STYLED.Page2ButtonAndValueDiv>
                        </STYLED.Page2PriceButtonDiv>
                    </STYLED.Page2NameOptionDiv >
                </STYLED.Page2SectionTitleOptionDiv >
                <STYLED.Page2SectionTitleOptionDiv>
                    <STYLED.Page2SectionTitle>Summa</STYLED.Page2SectionTitle>
                    <STYLED.PriceSummaryDiv>
                        <STYLED.PriceNumber>Soppan: {soupPrice} :-</STYLED.PriceNumber>
                        <STYLED.PriceNumber>Tillbehör: {extraPrice} :-</STYLED.PriceNumber>
                        <STYLED.PriceNumber>Totalt: {totalPrice} :-</STYLED.PriceNumber>
                    </STYLED.PriceSummaryDiv>
                </STYLED.Page2SectionTitleOptionDiv>
            </STYLED.Page2TitleSecions >
        )
    }
}

export default Page2

