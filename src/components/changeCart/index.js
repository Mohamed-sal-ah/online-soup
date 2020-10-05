import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { ChangeCart, LoadCart } from '../../action/cartAction'
import { Link, withRouter } from "react-router-dom";
import { MENUE } from '../../constants/routes'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

class ChangeSoup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            whichPage: 1,
            page1: '',
            page2: '',
            page3: '',
            localArr: ''
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
        const id = parseInt(this.props.match.params.id)
        const propsCart = this.props.cart
        const localCart = JSON.parse(localStorage.getItem('cart'))
        if (isNaN(id) || id < 0) {
            this.props.history.push(MENUE)
            return
        } else {
            if (propsCart.length === 0 && localCart === null) {
                this.props.history.push(MENUE)
            } else if (propsCart.length !== 0) {
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
                this.setState({ loading: true, page1: page1Add, page2: page2Add, page3: page3Add, name: oneCart.name })
            } else {
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
                this.setState({ loading: true, page1: page1Add, page2: page2Add, page3: page3Add, name: oneCart.name })
            }
            console.log(allCart);
        }

    }
    onBackPage = () => {
        const newState = this.state.whichPage - 1
        this.setState({ whichPage: newState })
    }
    onForwardPage = () => {
        const newState = this.state.whichPage + 1
        this.setState({ whichPage: newState })
    }
    onChangePage = (pageNumb, info) => {
        console.log(info);
        this.setState({ [`page${pageNumb}`]: info })
    }
    onSubmitAll = () => {
        const nameSoup = this.state.name;
        const oldArr = this.state.localArr
        const page1Obj = this.state.page1
        console.log(page1Obj);
        const page2Obj = this.state.page2
        const page3Obj = this.state.page3
        const newArr = []
        oldArr.forEach((item, index) => {
            if (index === parseInt(this.props.match.params.id)) {
                newArr.push({ ...page1Obj, ...page2Obj, ...page3Obj, name: nameSoup })
            } else {
                newArr.push(oldArr[index])
            }
        });
        console.log(newArr);
        localStorage.setItem('cart', JSON.stringify(newArr))
        this.props.ChangeCart(newArr)
        this.props.history.push(MENUE)
    }
    render() {
        const { whichPage, loading, page1, page2, page3 } = this.state
        let page;
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
        } else {
            page = <p>Loading...</p>
        }

        return (
            <section>
                {page}
                {whichPage < 2 ? <Link to={MENUE}>Back</Link> : <button onClick={this.onBackPage}>Back</button>}
                {whichPage < 3 ? <button onClick={this.onForwardPage}>forwards</button> : <button onClick={this.onSubmitAll} >all Forwards</button>}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps, { LoadCart, ChangeCart })(compose(withFirebase, withRouter)(ChangeSoup))
