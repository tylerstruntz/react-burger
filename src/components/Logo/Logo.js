import React from 'react';
//import not working at work
//import burgerLogo from '../../Assets/Images/burger-logo.png'
import burgerLogo from '../../assets/Images/burger-logo.png'
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt='Hamborgler'/>  
    </div>
)

export default logo;