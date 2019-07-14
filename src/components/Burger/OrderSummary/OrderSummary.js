import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

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
            <p>Your order costs: $<strong>{props.orderPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button 
                btnType='Danger'
                clicked={props.purchaseCanceled}>Cancel</Button>
            <Button 
                btnType='Success'
                clicked={props.purchaseContinues}>Continue</Button>
        </Aux>
    )
};

export default orderSummary;