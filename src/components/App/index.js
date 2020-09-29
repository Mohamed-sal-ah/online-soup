import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navigation from '../Navigation'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes'
import { withAuthentication } from '../Session';
import MenuePage from '../Menue';
import SoupInfo from '../SoupInfo';
import SelectSoup from '../SelectSoup';

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route path={ROUTES.MENUE} component={MenuePage} />
                <Route path={ROUTES.INFO_SOUP} component={SoupInfo} />
                <Route path={ROUTES.SELECT_SOUP} component={SelectSoup} />
                <Route path={ROUTES.ADMIN} component={AdminPage} />
            </div>
        </Router>
    );
}

export default withAuthentication(App);

