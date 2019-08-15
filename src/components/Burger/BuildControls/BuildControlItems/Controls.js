import React from 'react';
import classes from './Controls.css';

//holds the controls the user sees when creating a burger
const controls = (props) => (
    <div className={ classes.Control }>
        <div className={ classes.Label }>{ props.label }</div>
        <button
            className={ classes.More }
            onClick={ props.removed }
            disabled={ props.disabled }>-</button>
        <button className={ classes.Less } onClick={ props.added }>+</button>
    </div>
);
export default controls