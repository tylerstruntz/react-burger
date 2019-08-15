import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

//this is the 'navbar'. it holds the toggle to open the side drawer 
//depending on mobile or not. it also holds the navbar links if the 
//user is on desktop
const toolar = (props) => (
    <header className={ classes.Toolbar }>
        <DrawerToggle clicked={ props.drawerToggleClicked } />
        <div className={ classes.Logo }>
            <Logo />
        </div>
        <nav className={ classes.DesktopOnly }>
            <NavigationItem />
        </nav>
    </header>
);

export default toolar;