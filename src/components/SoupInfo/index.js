
import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
import { connect } from 'react-redux'
import { compose } from 'recompose';
import { FetchMenue } from '../../action/menueAction'
import { withRouter } from 'react-router-dom'
import * as ROUTE from '../../constants/routes'
import * as STYLED from './style'
import EggRamen from '../../images/egg-ramen.jpg'
import MeatSoup from '../../images/meat.jpg'
import Toscana from '../../images/toscana.jpg'
import Gulash from '../../images/gulash.jpg'
import MaizeSoup from '../../images/maize.jpg'
import CarrotSoup from '../../images/carrot.jpg'
import ShellFish from '../../images/shellfish.jpg'
import Salmon from '../../images/salmon.jpg'


class SoupInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: '',
            loading: false
        }
    }
    componentDidMount() {
        const id = parseInt(this.props.match.params.id)
        if (isNaN(id) || id < 0) {
            // non number
            this.setState({ loading: true, info: null })
            this.props.history.push(ROUTE.MENUE)
        } else if (this.props.menueList === "") {
            // no redux menue filter
            this.props.firebase.menueList().on("value", snapshot => {
                const menueList = snapshot.val()
                this.props.FetchMenue(menueList)
                const filterMenue = this.props.menueList[id]
                this.setState({ loading: true, info: filterMenue, id })
            })
        } else {
            // redux menue filter
            const item = this.props.menueList[id]
            this.setState({ loading: true, info: item, id })
        }
    }
    render() {
        const { loading, info, id } = this.state
        const allImgArray = [
            EggRamen,
            MeatSoup,
            Toscana,
            Gulash,
            MaizeSoup,
            CarrotSoup,
            ShellFish,
            Salmon
        ]
        return (
            <STYLED.FullPage className="page">
                {loading ?
                    <>
                        <STYLED.BackGroundImage
                            BackImage={`url(${allImgArray[id]}) ${id === 5 ? 'bottom' : 'center'} no-repeat`}
                        >
                            <STYLED.BackgroundOpacity>
                                {info !== null ?
                                    <>
                                        <STYLED.TitleAndListDiv>
                                            <STYLED.PriceAndNameDiv>
                                                <STYLED.TitleHeader>{info.name}</STYLED.TitleHeader>
                                                <STYLED.PriceHeader>{info.price}:-</STYLED.PriceHeader>
                                            </STYLED.PriceAndNameDiv>
                                            <STYLED.ListDiv>
                                                <STYLED.TitleList>Ingredienser</STYLED.TitleList>
                                                <STYLED.ListUL>
                                                    {info.ingredient.map((item, key) => (
                                                        <STYLED.ListText key={key}>{item}</STYLED.ListText>
                                                    ))}
                                                </STYLED.ListUL>
                                                <STYLED.TitleList>Energi</STYLED.TitleList>
                                                <STYLED.ListUL>
                                                    <STYLED.ListText>kolhydrater: {info.nutritionalValue.carbohydrates}</STYLED.ListText>
                                                    <STYLED.ListText>Fet: {info.nutritionalValue.fat}</STYLED.ListText>
                                                    <STYLED.ListText>Salt: {info.nutritionalValue.salt}</STYLED.ListText>
                                                    <STYLED.ListText>Protein: {info.nutritionalValue.protein}</STYLED.ListText>
                                                    <STYLED.ListText>Energi per soppa: {info.nutritionalValue.energy}</STYLED.ListText>
                                                </STYLED.ListUL>
                                            </STYLED.ListDiv>
                                        </STYLED.TitleAndListDiv>
                                    </> : null}
                                <STYLED.LinkItemDiv>
                                    <STYLED.BackLink to={ROUTE.MENUE}>
                                        <STYLED.BackArrow />
                                    </STYLED.BackLink>
                                    <STYLED.AddLink to={`/select/${id}`}>
                                        <STYLED.AddSymbol />
                                    </STYLED.AddLink>
                                </STYLED.LinkItemDiv>
                            </STYLED.BackgroundOpacity>
                        </STYLED.BackGroundImage>
                        <STYLED.DesktopSection>
                            {info !== null ?
                                <>
                                    <STYLED.TitleAndListDiv>
                                        <STYLED.PriceAndNameDiv>
                                            <STYLED.TitleHeader>{info.name}</STYLED.TitleHeader>
                                            <STYLED.PriceHeader>{info.price}:-</STYLED.PriceHeader>
                                        </STYLED.PriceAndNameDiv>
                                        <STYLED.DestktopListDiv>
                                            <STYLED.DesktopListAndTitle>
                                                <STYLED.DesktopTitleList>Ingredienser</STYLED.DesktopTitleList>
                                                <STYLED.ListUL>
                                                    {info.ingredient.map((item, key) => (
                                                        <STYLED.ListText key={key}>{item}</STYLED.ListText>
                                                    ))}
                                                </STYLED.ListUL>
                                            </STYLED.DesktopListAndTitle>
                                            <STYLED.DesktopListAndTitle>
                                                <STYLED.DesktopTitleList>Energi</STYLED.DesktopTitleList>
                                                <STYLED.ListUL>
                                                    <STYLED.ListText>kolhydrater: {info.nutritionalValue.carbohydrates}</STYLED.ListText>
                                                    <STYLED.ListText>Fet: {info.nutritionalValue.fat}</STYLED.ListText>
                                                    <STYLED.ListText>Salt: {info.nutritionalValue.salt}</STYLED.ListText>
                                                    <STYLED.ListText>Protein: {info.nutritionalValue.protein}</STYLED.ListText>
                                                    <STYLED.ListText>Energi per soppa: {info.nutritionalValue.energy}</STYLED.ListText>
                                                </STYLED.ListUL>
                                            </STYLED.DesktopListAndTitle>
                                        </STYLED.DestktopListDiv>
                                    </STYLED.TitleAndListDiv>
                                </> : null}
                            <STYLED.LinkItemDiv>
                                <STYLED.BackLink to={ROUTE.MENUE}>
                                    <STYLED.BackArrow />
                                </STYLED.BackLink>
                                <STYLED.AddLink to={`/select/${id}`}>
                                    <STYLED.AddSymbol />
                                </STYLED.AddLink>
                            </STYLED.LinkItemDiv>
                        </STYLED.DesktopSection>
                    </>
                    : null}
            </STYLED.FullPage>
        )
    }
}

const mapStateToProps = state => ({
    menueList: state.menueRedux.menue
})


export default connect(mapStateToProps, { FetchMenue })(compose(withFirebase, withRouter)(SoupInfo))

