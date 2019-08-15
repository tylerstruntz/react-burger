import React from 'react';
import classes from './spinner.css'

//displays a spinner. pair it with some loading boolean
//in state of some class and can be used if something is 
//loading or isnt there. much nicer than text (;
const spinner = () => (
    <div className={ classes.Loader }>Loading...</div>
);

export default spinner;