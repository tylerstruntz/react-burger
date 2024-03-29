import React from 'react';
import classes from './BuildControls.css';
import Controls from './BuildControlItems/Controls';

const controlsArr = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


//displays the price of the burger and also the number of ingredients. 
//also holds the checkout button
const buildcontrols = (props) => (
    <div className={ classes.BuildControls }>
        <p>Current Price:  <strong>${ props.price.toFixed(2) }</strong></p>
        { controlsArr.map(ctrlItem => (
            <Controls
                key={ ctrlItem.label }
                label={ ctrlItem.label }
                added={ () => props.ingredientAdded(ctrlItem.type) }
                removed={ () => props.ingredientRemoved(ctrlItem.type) }
                disabled={ props.disabled[ctrlItem.type] }
            />
        )) }
        <button
            className={ classes.OrderButton }
            disabled={ !props.purchasable }
            onClick={ props.orderNowClicked }
        >Check Out</button>
    </div>
);

export default buildcontrols;

