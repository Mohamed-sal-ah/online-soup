import React from 'react'
import { Link } from 'react-router-dom';

const MenueItem = ({ item, id, allCart }) => {
    let numbers = 0;
    allCart.forEach(cart => {
        if (cart.name === item.name) {
            numbers++
        }
    });
    return (
        <li>
            <h3>{item.name}</h3>
            {numbers > 0 ? <h3>{numbers}</h3> : null}
            <h6>{item.description}</h6>
            <h3>{item.price}-:</h3>
            {/* <img alt="bild på soppan" src="https://placeimg.com/300/300/nature" /> */}
            <Link to={`/info/${id}`}>info</Link>
            <Link to={`/select/${id}`}>Link to add</Link>
        </li>
    )
}

export default MenueItem
