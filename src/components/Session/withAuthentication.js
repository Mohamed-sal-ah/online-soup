import React from 'react';
import { connect } from 'react-redux'
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import { LoggIn, LoggOut } from '../../action/AuthUserAction'

const mapStateToProps = state => ({
    userOnAuth: state.authUserRedux.user
})

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authUser: 'loading',
            };
        }
        componentDidMount() {
            console.log(this.props);
            if (this.props.userOnAuth === "") {
                console.log('redux not loaded');
                this.listener = this.props.firebase.onAuthUserListener(
                    authUser => {
                        this.props.LoggIn(authUser)
                        this.setState({ authUser });
                    },
                    () => {
                        this.props.LoggOut()
                        this.setState({ authUser: null });
                    },
                );
                const loaded = !this.state.loading
                this.setState({ loading: loaded })
            } else {
                this.setState({ authUser: this.props.userOnAuth })
            }
        }

        componentWillUnmount() {
            this.listener();
        }
        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }
    return connect(mapStateToProps, { LoggIn, LoggOut })(withFirebase(WithAuthentication));
};


export default withAuthentication;