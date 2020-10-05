import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { connect } from 'react-redux'
import { FetchMenue } from '../../action/menueAction'
import { LoadCart } from '../../action/cartAction'
import MenueItem from './menue-item'
import { withRouter, Link } from "react-router-dom";
import { SHOPPING_CART } from '../../constants/routes';
class MenueItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menue: '',
            loading: false,
            cartArr: [],
        }
    }
    componentDidMount() {
        const allCart = JSON.parse(localStorage.getItem('cart'))
        const propsCart = this.props.cart
        console.log(allCart);
        if (allCart !== null && propsCart.length === 0) {
            this.props.LoadCart(allCart)
            this.setState({ cartArr: allCart })
        } else {
            console.log('gg');
            this.setState({ cartArr: propsCart })
        }
        if (this.props.menueList === "") {
            this.props.firebase.menueList().on('value', snapshot => {
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
            <div>
                <Link to={SHOPPING_CART} >Shopping cart</Link>
                <div>
                    how many in cart {cartArr.length}
                </div>
                {loading ? <ul>
                    {
                        menue.map((item, id) => (
                            <MenueItem key={id} id={id} item={item} allCart={cartArr} />
                        ))
                    }
                </ul> :
                    <p>Loading</p>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    menueList: state.menueRedux.menue,
    cart: state.cart
})

export default connect(mapStateToProps, { FetchMenue, LoadCart })(compose(withFirebase, withRouter)(MenueItems))

