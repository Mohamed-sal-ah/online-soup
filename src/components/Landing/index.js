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
                    <STYLED.LargeTitle>Hej</STYLED.LargeTitle>
                    <STYLED.LargeText>Väkommen till Online Soup Delivery Mockup projekt där du kan välja Soppa och anpassa den och tillslut kan du skicka till dig själv eller till dina vänner.</STYLED.LargeText>
                    <STYLED.ButtonLink to={ROUTE.MENUE}>Till Sopporna</STYLED.ButtonLink>
                </STYLED.RightSide>
                <STYLED.LargeBackGroundImg />
            </STYLED.PageSection>
        </STYLED.FullPage>
    )
}

export default LandingPage
