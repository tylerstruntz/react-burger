import React from 'react';
import classes from './IndNavigationItem.css'
import { NavLink } from 'react-router-dom';

//creates a single navigaation item
const indNavigationItem = (props) => (
    <li className={ classes.IndNavigationItem }>
        <NavLink
            to={ props.link }
            exact
            activeClassName={ classes.active }>{ props.children }</NavLink>
    </li>
);

export default indNavigationItem;