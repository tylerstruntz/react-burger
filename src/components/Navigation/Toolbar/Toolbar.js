import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItems';

const toolar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavigationItem />
        </nav>
    </header>
);

export default toolar;