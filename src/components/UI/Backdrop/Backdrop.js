import React from 'react';
import classes from './Backdrop.css';

//this is the backdrop, simply, a black box for the modal
//to make the modal stand on. will dissapear if clicked.
const backdrop = (props) => (
    props.show ? <div className={ classes.Backdrop } onClick={ props.clicked }></div> : null
);

export default backdrop;