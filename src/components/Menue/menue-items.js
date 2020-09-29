import React, { Component } from 'react'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';
import { connect } from 'react-redux'
import { FetchMenue } from '../../action/menueAction'
import MenueItem from './menue-item'
import { withRouter } from "react-router-dom";
import { INFO_SOUP } from '../../constants/routes'
class MenueItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menue: '',
            loading: false
        }
    }
    componentDidMount() {

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
    onTestButtuon = (idNumb) => {
        console.log(idNumb);
        console.log(this.props);
        this.props.history.loctation.state = { id: idNumb }
        this.props.history.push(`${INFO_SOUP}`)
    }

    render() {
        const { loading, menue } = this.state
        return (
            <div>
                {loading ? <ul>
                    {
                        menue.map((item, id) => (
                            <MenueItem key={id} id={id} item={item} onTest={this.onTestButtuon} />
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
    menueList: state.menueRedux.menue
})

export default connect(mapStateToProps, { FetchMenue })(compose(withFirebase, withRouter)(MenueItems))

