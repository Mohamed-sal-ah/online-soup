import React from 'react'
import * as ROUTE from '../../constants/routes'
import { ReactComponent as Arrow } from '../../images/Arrow.svg'
import * as STYLED from './style'

const LandingPage = () => {
    return (
        <STYLED.FullPage className="page" id='g'>
            <STYLED.LandingTitle>Online Soup Delivery</STYLED.LandingTitle>
            <STYLED.PageSection>
                <STYLED.LeftSide>
                    <STYLED.SoupStyle />
                </STYLED.LeftSide>
                <STYLED.RightSide>
                    <STYLED.ArrowDiv>
                        <Arrow />
                    </STYLED.ArrowDiv>
                    <STYLED.LargeTitle>Välkommen</STYLED.LargeTitle>
                    <STYLED.LargeText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</STYLED.LargeText>
                    <STYLED.ButtonLink to={ROUTE.MENUE}>Till Sopporna</STYLED.ButtonLink>
                </STYLED.RightSide>
                <STYLED.LargeBackGroundImg />
            </STYLED.PageSection>
        </STYLED.FullPage>
    )
}

export default LandingPage
