
import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
import { connect } from 'react-redux'
import { compose } from 'recompose';
import { FetchMenue } from '../../action/menueAction'
import { Link, withRouter } from 'react-router-dom'
import * as ROUTE from '../../constants/routes'
class SoupInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: '',
            loading: false
        }
    }
    componentDidMount() {
        console.log(this.props);
        const { match: { params } } = this.props;
        console.log(params.id);
        const id = parseInt(params.id)
        if (isNaN(id) || id < 0) {
            this.setState({ loading: true, info: null })
            return
        } else if (this.props.menueList === "") {
            this.props.firebase.menueList().on("value", snapshot => {
                const menueList = snapshot.val()
                // this.setState({ menue: menueList, loading: true })
                this.props.FetchMenue(menueList)
                const filterMenue = this.props.menueList[id]
                this.setState({ loading: true, info: filterMenue })
            })
        } else {
            const item = this.props.menueList[id]
            this.setState({ loading: true, info: item })
        }
    }
    render() {
        const { loading, info } = this.state
        return (
            <div>
                {loading ? <div>
                    {info !== null ?
                        <div>
                            <img alt="bild på soppan" src="https://placeimg.com/600/600/nature" />
                            <h1>{info.name}</h1>
                            <h5>ingirenser</h5>
                            <ul>
                                {info.ingredient.map((item, key) => (
                                    <p key={key}>{item}</p>
                                ))}
                            </ul>
                            <h5>Energi</h5>
                            <ul>
                                <p>{info.nutritionalValue.carbohydrates}</p>
                                <p>{info.nutritionalValue.fat}</p>
                                <p>{info.nutritionalValue.salt}</p>
                                <p>{info.nutritionalValue.protein}</p>
                                <p>{info.nutritionalValue.energy}</p>
                            </ul>
                        </div> : <p>not found</p>}
                </div> : <p>Loading</p>}
                <Link to={ROUTE.MENUE}>Back</Link><Link to={ROUTE.SELECT_SOUP}>Add</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    menueList: state.menueRedux.menue
})


export default connect(mapStateToProps, { FetchMenue })(compose(withFirebase, withRouter)(SoupInfo))

