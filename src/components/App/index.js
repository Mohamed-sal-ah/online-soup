import React from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css'
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import Admin from '../Admin';
import * as ROUTES from '../../constants/routes'
import { withAuthentication } from '../Session';
import MenuePage from '../Menue';
import SoupInfo from '../SoupInfo';
import SelectSoup from '../SelectSoup';
import ShoppingCart from '../ShoppingCart';
import changeCart from '../changeCart';
import UserStatus from '../UserStatus';
import GuestUser from '../GuestUser';
import PayPage from '../Pay';
import DeliveryStatus from '../DeliveryStatus';
import Account from '../Account';
import UserPay from '../UserPay';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import CardPay from '../CardPay';
import UserInstruct from '../UserInstruct';

const App = () => {
    return (<>
        <Route render={({ location }) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={2500}
                    classNames="fade"
                >
                    <Switch location={location}>
                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route path={ROUTES.MENUE} component={MenuePage} />
                        <Route path={ROUTES.INFO_SOUP} component={SoupInfo} />
                        <Route path={ROUTES.SELECT_SOUP} component={SelectSoup} />
                        <Route path={ROUTES.SHOPPING_CART} component={ShoppingCart} />
                        <Route path={ROUTES.CHANGE_CART} component={changeCart} />
                        <Route path={ROUTES.ADMIN_PAGE} component={Admin} />
                        <Route path={ROUTES.USER_STATUS} component={UserStatus} />
                        <Route path={ROUTES.GUEST} component={GuestUser} />
                        <Route path={ROUTES.PAY_PAGE} component={PayPage} />
                        <Route path={ROUTES.DELIVERY_STATUS} component={DeliveryStatus} />
                        <Route path={ROUTES.ACCOUT_PAGE} component={Account} />
                        <Route path={ROUTES.USER_PAY} component={UserPay} />
                        <Route path={ROUTES.CARD_PAY} component={CardPay} />
                        <Route path={ROUTES.USER_INSTRUCTION} component={UserInstruct} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )} />
    </>
    );
}



export default withAuthentication(App);

