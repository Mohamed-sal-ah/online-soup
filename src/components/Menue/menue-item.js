import React from 'react'
import * as STYLED from './item-style';
import EggRamen from '../../images/egg-ramen.jpg'
import MeatSoup from '../../images/meat.jpg'
import Toscana from '../../images/toscana.jpg'
import Gulash from '../../images/gulash.jpg'
import MaizeSoup from '../../images/maize.jpg'
import CarrotSoup from '../../images/carrot.jpg'
import ShellFish from '../../images/shellfish.jpg'
import Salmon from '../../images/salmon.jpg'
const MenueItem = ({ item, id, allCart }) => {
    let numbers = 0;
    allCart.forEach(cart => {
        if (cart.name === item.name) {
            numbers++
        }
    });
    const allImgArray = [
        EggRamen,
        MeatSoup,
        Toscana,
        Gulash,
        MaizeSoup,
        CarrotSoup,
        ShellFish,
        Salmon
    ]
    return (
        <STYLED.ListItem
            BackImage={`url(${allImgArray[id]}) ${id === 5 ? 'bottom' : 'center'} no-repeat`}
        >
            <STYLED.TitlePriceTextDiv>
                <STYLED.TitleAndDetailsDiv>
                    <STYLED.ListTitle>{item.name}</STYLED.ListTitle>
                    <STYLED.ListDetails>{item.description}</STYLED.ListDetails>
                </STYLED.TitleAndDetailsDiv>
                <STYLED.PriceText>{item.price}-:</STYLED.PriceText>
            </STYLED.TitlePriceTextDiv>
            <STYLED.LinkItemDiv>
                <STYLED.InfoLink to={`/info/${id}`}>
                    <STYLED.InfoSymbol />
                </STYLED.InfoLink>
                <STYLED.CartAndAddSpan style={{ marginRight: `${numbers > 0 ? '10px' : '28px'}` }}>
                    <STYLED.AddLink to={`/select/${id}`}>
                        <STYLED.AddSymbol />
                    </STYLED.AddLink>
                    {numbers > 0 ? <STYLED.CartNumbers>{numbers}</STYLED.CartNumbers> : null}
                </STYLED.CartAndAddSpan>
            </STYLED.LinkItemDiv>
        </STYLED.ListItem>
    )
}

export default MenueItem
