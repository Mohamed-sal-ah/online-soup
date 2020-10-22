import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose';
import { FetchMenue } from '../../action/menueAction'
import { LoadCart } from '../../action/cartAction'
import MenueNav from './nav'
import { withFirebase } from '../Firebase'
import { withRouter } from "react-router-dom";
import { FullPage, MenueListUL } from './styled'
import MenueItem from './menue-item'


class MenuePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menue: '',
            loading: false,
            cartArr: [],
        }
    }
    componentDidMount() {
        // new cart add animation from select cart redux or localhost
        const allCart = JSON.parse(localStorage.getItem('cart'))
        const propsCart = this.props.cart
        if (allCart !== null && propsCart.length === 0) {
            this.props.LoadCart(allCart)
            this.setState({ cartArr: allCart })
        } else {
            this.setState({ cartArr: propsCart })
        }
        if (this.props.menueList === "") {
            this.props.firebase.menueList().once('value', snapshot => {
                const menueList = snapshot.val()
                // this.setState({ menue: menueList, loading: true })
                this.props.FetchMenue(menueList)
                this.setState({ loading: true, menue: this.props.menueList })
            })
        } else {
            this.setState({ loading: true, menue: this.props.menueList })
        }
    }
    render() {
        const { loading, menue, cartArr } = this.state
        return (
            <FullPage className="page">
                <MenueNav cartArr={cartArr} />
                {loading ?
                    <MenueListUL>
                        {
                            menue.map((item, id) => (
                                <MenueItem key={id} id={id} item={item} allCart={cartArr} />
                            ))
                        }
                    </MenueListUL>
                    : <p>Loading</p>}
            </FullPage>
        )
    }

}

const mapStateToProps = state => ({
    menueList: state.menueRedux.menue,
    cart: state.cart
})

export default connect(mapStateToProps, { FetchMenue, LoadCart })(compose(withFirebase, withRouter)(MenuePage))
