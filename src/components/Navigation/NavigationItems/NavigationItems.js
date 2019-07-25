import React from 'react'
import IndNavigationItem from './IndNavigationItem/IndNavigationItem'
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <IndNavigationItem
            link='/' 
            active
        >Burger Builder</IndNavigationItem>
        <IndNavigationItem
            link='/'
        >Checkout</IndNavigationItem>
    </ul>
);

export default navigationItems;