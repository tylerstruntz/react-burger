import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary/Auxillary';

const sideDrawer = (props) => {
    let attatchClasses = [classes.SideDrawer, classes.Close];
    if (props.showSideDrawer) {
        attatchClasses = [classes.SideDrawer, classes.showSideDrawer]
    }
    return (
        <Aux>
            <Backdrop
                show={ props.showSideDrawer }
                clicked={ props.closed }
            />
            <div className={ attatchClasses.join(' ') }>
                <div className={ classes.Logo }>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer