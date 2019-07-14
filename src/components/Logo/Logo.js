import React from 'react';
import burgerLogo from '../../Assets/Images/HamburgerLogo.png'
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='Hamborgler'/>
    </div>
)

export default logo;