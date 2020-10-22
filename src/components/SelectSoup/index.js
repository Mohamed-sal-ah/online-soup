import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { FetchMenue } from '../../action/menueAction'
import { AddToCart } from '../../action/cartAction'
import { withRouter } from "react-router-dom";
import { MENUE } from '../../constants/routes'
import * as STYLED from './style'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

const variants = {
    disapear: {
        opacity: 0
    },
    appear: {
        opacity: 1,
    }
}

class SelectSoup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            whichPage: 1,
            progressPage: 1,
            page1: '',
            page2: '',
            page3: '',
            selectedSoup: '',
            localArr: '',
            pageOpacity: true,
            allComplete: false
        }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params.id);
        const allCart = JSON.parse(localStorage.getItem('cart'))
        if (allCart === null) {
            this.setState({ localArr: [] })
        } else {
            this.setState({ localArr: allCart })
        }
        console.log(allCart);

        const id = parseInt(this.props.match.params.id)
        if (isNaN(id) || id < 0) {
            this.props.history.push(MENUE)
            return
        } else if (this.props.menueList === "") {
            this.props.firebase.menueList().on("value", snapshot => {
                const menueList = snapshot.val()
                this.props.FetchMenue(menueList)
                const filterMenue = this.props.menueList[id]
                this.setState({ loading: true, selectedSoup: filterMenue, id })
            })
        } else {
            const item = this.props.menueList[id]
            this.setState({ loading: true, selectedSoup: item, id })
        }
    }
    onBackPage = () => {
        const progress = this.state.progressPage - 1
        const opacity = !this.state.pageOpacity
        this.setState({ pageOpacity: opacity, progressPage: progress })
        setTimeout(() => {
            const newState = this.state.whichPage - 1
            this.setState({ whichPage: newState, pageOpacity: true })
        }, 550)
    }
    onForwardPage = () => {
        const progress = this.state.progressPage + 1
        const opacity = !this.state.pageOpacity
        this.setState({ pageOpacity: opacity, progressPage: progress })
        setTimeout(() => {
            const newState = this.state.whichPage + 1
            this.setState({ whichPage: newState, pageOpacity: true })
        }, 550)
    }
    onChangePage = (pageNumb, info) => {
        console.log(info);
        this.setState({ [`page${pageNumb}`]: info })
    }
    onSubmitAll = () => {
        this.setState({ allComplete: true })
        setTimeout(() => {
            // animtion for add add item for cart in menue page
            const addName = this.state.selectedSoup.name
            const allOneCart = { ...this.state.page1, ...this.state.page2, ...this.state.page3, name: addName }
            this.props.AddToCart(allOneCart)
            const arrayLocal = this.state.localArr
            arrayLocal.push(allOneCart)
            localStorage.setItem("cart", JSON.stringify(arrayLocal))
            this.props.history.push(MENUE)
        }, 600)
    }
    render() {
        const { whichPage, selectedSoup, loading, pageOpacity, progressPage, allComplete } = this.state
        let page;
        let lenght;
        if (loading) {
            switch (whichPage) {
                case 1:
                    page = <Page1 onChangePage={this.onChangePage} />
                    break;
                case 2:
                    page = <Page2 onChangePage={this.onChangePage} soupPrice={selectedSoup.price} />
                    break;
                case 3:
                    page = <Page3 onChangePage={this.onChangePage} />
                    break;
                default:
                    break;
            }
            if (allComplete) {
                lenght = "100%"
            } else {
                switch (progressPage) {
                    case 1:
                        lenght = "0"
                        break;
                    case 2:
                        lenght = "35%"
                        break;
                    case 3:
                        lenght = "65%"
                        break;
                    default:

                        break;
                }
            }
        } else {
            page = <p>Loading...</p>
        }

        return (
            <STYLED.FullPage className="page">
                <STYLED.MotionDiv
                    animate={pageOpacity ? "appear" : "disapear"}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                >
                    {page}
                </STYLED.MotionDiv>
                <STYLED.ProgressDivButton>
                    <STYLED.ProgressTotalDiv>
                        <STYLED.Progress>
                            <STYLED.SpanPercent style={{ width: `${lenght}` }} />
                        </STYLED.Progress>
                        <STYLED.StepsDiv>
                            <STYLED.Step className={`${progressPage === 1 ? "selected" : ''} ${progressPage > 1 ? "completed" : ''}`} />
                            <STYLED.Step className={`${progressPage === 2 ? "selected" : ''} ${progressPage > 2 ? "completed" : ''}`} />
                            <STYLED.Step className={`${progressPage === 3 && !allComplete ? "selected" : ''} ${allComplete ? "completed" : ''}`} />
                            <STYLED.CompletedStep className={`${allComplete ? "submit" : ''}`} >
                                <STYLED.CompletedCheckMark />
                            </STYLED.CompletedStep>
                        </STYLED.StepsDiv>
                    </STYLED.ProgressTotalDiv>
                    <STYLED.DivButton>
                        {whichPage < 2 ? <STYLED.BackButton to={MENUE}>Back</STYLED.BackButton> : <STYLED.BackButton as="button" onClick={this.onBackPage}>Back</STYLED.BackButton>}
                        {whichPage < 3 ? <STYLED.SubmitButton onClick={this.onForwardPage}>Nästa</STYLED.SubmitButton> : <STYLED.SubmitButton onClick={this.onSubmitAll} >Nästa</STYLED.SubmitButton>}
                    </STYLED.DivButton>
                </STYLED.ProgressDivButton>
            </STYLED.FullPage>
        )
    }
}

const mapStateToProps = state => ({
    menueList: state.menueRedux.menue
})

export default connect(mapStateToProps, { FetchMenue, AddToCart })(compose(withFirebase, withRouter)(SelectSoup))
