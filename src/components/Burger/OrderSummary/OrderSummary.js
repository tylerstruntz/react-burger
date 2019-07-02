import React from 'react';
import Aux from '../../../hoc/Auxillary';

const orderSummary = (props) => {
    const ingredientsUsed = Object.keys(props.ingredient).map(igKey => {
        return( 
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredient[igKey]}
            </li>
        )
    });
    
    return(
        <Aux>
            <h3>Your Order</h3><br />
            <p>Ingredients</p>
            <ul>
                {ingredientsUsed}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default orderSummary;