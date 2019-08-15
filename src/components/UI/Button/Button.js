import React from 'react';
import classes from './Button.css';

//simple class that holds a nice implementation of a button.
//pass it a name and that is what it will be named
const button = (props) => (
    <button
        disabled={ props.disabled }
        className={ [classes.Button, classes[props.btnType]].join(' ') }
        onClick={ props.clicked }
    >{ props.children }</button>
);

export default button;