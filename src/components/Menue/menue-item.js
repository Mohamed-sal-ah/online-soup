import React from 'react'
import { Link } from 'react-router-dom';
import { SELECT_SOUP, INFO_SOUP } from '../../constants/routes'

const MenueItem = ({ item, id, onTest }) => {
    return (
        <li>
            <h3>{item.name}</h3>
            <h6>{item.description}</h6>
            <h3>{item.price}-:</h3>
            {/* <img alt="bild på soppan" src="https://placeimg.com/300/300/nature" /> */}
            <button onClick={() => onTest(id)} >TestRoute</button>
            <Link to={INFO_SOUP}>info</Link>
            <Link to={SELECT_SOUP}>Link to add</Link>
        </li>
    )
}

export default MenueItem
