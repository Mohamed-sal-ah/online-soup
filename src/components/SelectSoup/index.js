import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { FetchMenue } from '../../action/menueAction'
import { AddToCart } from '../../action/cartAction'
import { Link, withRouter } from "react-router-dom";
import { MENUE } from '../../constants/routes'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

class SelectSoup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            whichPage: 1,
            page1: '',
            page2: '',
            page3: '',
            selectedSoup: '',
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
        const addName = this.state.selectedSoup.name
        const allOneCart = { ...this.state.page1, ...this.state.page2, ...this.state.page3, name: addName }
        this.props.AddToCart(allOneCart)
        const arrayLocal = this.state.localArr
        arrayLocal.push(allOneCart)
        localStorage.setItem("cart", JSON.stringify(arrayLocal))
        this.props.history.push(MENUE)
    }
    render() {
        const { whichPage, selectedSoup, loading } = this.state
        let page;
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
    menueList: state.menueRedux.menue
})

export default connect(mapStateToProps, { FetchMenue, AddToCart })(compose(withFirebase, withRouter)(SelectSoup))
