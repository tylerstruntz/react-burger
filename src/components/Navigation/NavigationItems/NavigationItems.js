import React from 'react'
import IndNavigationItem from './IndNavigationItem/IndNavigationItem'
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <IndNavigationItem link='/'>Burger Builder</IndNavigationItem>
        <IndNavigationItem link='/orders'>Orders</IndNavigationItem>

    </ul>
);

export default navigationItems;