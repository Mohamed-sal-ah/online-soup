import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { ChangeCart, LoadCart } from '../../action/cartAction'
import { withRouter } from "react-router-dom";
import { MENUE, SHOPPING_CART } from '../../constants/routes'
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

class ChangeSoup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            whichPage: 1,
            progressPage: 1,
            page1: '',
            page2: '',
            page3: '',
            localArr: '',
            howMany: '',
            pageOpacity: true,
            allComplete: false
        }
    }
    componentDidMount() {
        const allCart = JSON.parse(localStorage.getItem('cart'))
        if (allCart === null) {
            // no items in allCart
            this.setState({ localArr: [] })
        } else {
            // has items in allCart
            this.setState({ localArr: allCart })
        }
        const id = parseInt(this.props.match.params.id)
        const propsCart = this.props.cart
        const localCart = JSON.parse(localStorage.getItem('cart'))
        if (isNaN(id) || id < 0) {
            // has non number
            this.props.history.push(MENUE)
            return
        } else {
            if (propsCart.length === 0 && localCart === null) {
                // no items in cart
                this.props.history.push(MENUE)
            } else if (propsCart.length !== 0) {
                // cart in redux
                const oneCart = propsCart[id]
                const page1Add = {
                    remove: {
                        ...oneCart.remove
                    }
                }
                const soPrice = oneCart.soupPrice
                const accPrice = oneCart.extraPrice
                const totPrice = oneCart.totalPrice
                const page2Add = {
                    accessories: { ...oneCart.accessories },
                    drinks: { ...oneCart.drinks },
                    soupPrice: soPrice,
                    extraPrice: accPrice,
                    totalPrice: totPrice
                }
                const temp = oneCart.temprature
                const page3Add = {
                    tempatrure: temp
                }
                // input all cart in state
                this.setState({ loading: true, page1: page1Add, page2: page2Add, page3: page3Add, name: oneCart.name, howMany: oneCart.howMany })
            } else {
                // cart in localstorage
                const oneCart = localCart[id]
                this.props.LoadCart(localCart)
                const page1Add = {
                    remove: {
                        ...oneCart.remove
                    }
                }
                const soPrice = oneCart.soupPrice
                const accPrice = oneCart.extraPrice
                const totPrice = oneCart.totalPrice
                const page2Add = {
                    accessories: { ...oneCart.accessories },
                    drinks: { ...oneCart.drinks },
                    soupPrice: soPrice,
                    extraPrice: accPrice,
                    totalPrice: totPrice
                }
                const temp = oneCart.temprature
                const page3Add = {
                    tempatrure: temp
                }
                // input all cart in state
                this.setState({ loading: true, page1: page1Add, page2: page2Add, page3: page3Add, name: oneCart.name, howMany: oneCart.howMany })
            }
        }

    }
    onBackPage = () => {
        // step backward
        const progress = this.state.progressPage - 1
        const opacity = !this.state.pageOpacity
        this.setState({ pageOpacity: opacity, progressPage: progress })
        setTimeout(() => {
            // page change animation
            const newState = this.state.whichPage - 1
            this.setState({ whichPage: newState, pageOpacity: true })
        }, 550)
    }
    onForwardPage = () => {
        // step forward
        const progress = this.state.progressPage + 1
        const opacity = !this.state.pageOpacity
        this.setState({ pageOpacity: opacity, progressPage: progress })
        setTimeout(() => {
            // page change animation
            const newState = this.state.whichPage + 1
            this.setState({ whichPage: newState, pageOpacity: true })
        }, 550)
    }
    onChangePage = (pageNumb, info) => {
        // input all page value in page state 
        this.setState({ [`page${pageNumb}`]: info })
    }
    onSubmitAll = () => {
        // submit all page value
        this.setState({ allComplete: true })
        setTimeout(() => {
            // animtion for add add item for cart in menue page
            const nameSoup = this.state.name;
            const oldArr = this.state.localArr
            const page1Obj = this.state.page1
            const page2Obj = this.state.page2
            const page3Obj = this.state.page3
            const howManySoups = this.state.howMany
            const newArr = []
            oldArr.forEach((item, index) => {
                if (index === parseInt(this.props.match.params.id)) {
                    newArr.push({ ...page1Obj, ...page2Obj, ...page3Obj, name: nameSoup, howMany: howManySoups })
                } else {
                    newArr.push(oldArr[index])
                }
            });
            localStorage.setItem('cart', JSON.stringify(newArr))
            this.props.ChangeCart(newArr)
            this.props.history.push(SHOPPING_CART)
        }, 600)
    }
    render() {
        const { whichPage, loading, page1, page2, page3, pageOpacity, progressPage, allComplete } = this.state
        let page;
        let lenght;
        if (loading) {
            switch (whichPage) {
                case 1:
                    page = <Page1 onChangePage={this.onChangePage} pageValues={page1} />
                    break;
                case 2:
                    page = <Page2 onChangePage={this.onChangePage} pageValues={page2} />
                    break;
                case 3:
                    page = <Page3 onChangePage={this.onChangePage} pageValues={page3} />
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
                        {whichPage < 2 ? <STYLED.BackButton to={MENUE}>Tillbaka</STYLED.BackButton> : <STYLED.BackButton as="button" onClick={this.onBackPage}>Tillbaka</STYLED.BackButton>}
                        {whichPage < 3 ? <STYLED.SubmitButton onClick={this.onForwardPage}>Nästa</STYLED.SubmitButton> : <STYLED.SubmitButton onClick={this.onSubmitAll} >Nästa</STYLED.SubmitButton>}
                    </STYLED.DivButton>
                </STYLED.ProgressDivButton>
            </STYLED.FullPage>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, { LoadCart, ChangeCart })(compose(withFirebase, withRouter)(ChangeSoup))
