import React from 'react'
import IndNavigationItem from './IndNavigationItem/IndNavigationItem'
import classes from './NavigationItems.css';

//these are the links that the user can click in the navbar. will route
//user to specifed component from App.js
const navigationItems = () => (
    <ul className={ classes.NavigationItems }>
        <IndNavigationItem link='/'>Burger Builder</IndNavigationItem>
        <IndNavigationItem link='/orders'>Orders</IndNavigationItem>
        <IndNavigationItem link='/auth'>Authentication</IndNavigationItem>
    </ul>
);

export default navigationItems;