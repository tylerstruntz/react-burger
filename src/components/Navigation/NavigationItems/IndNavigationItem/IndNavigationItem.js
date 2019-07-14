import React from 'react';
import classes from './IndNavigationItem.css'

const indNavigationItem = (props) => (
    <li className={classes.IndNavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}
        >{props.children}</a>
    </li>
);

export default indNavigationItem;