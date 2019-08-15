import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css'

//provides the first summary the user sees when checking out.
//recreates the burger with the ingredients added. also renders
//two buttons for the user to checkout or cancel order.
const checkoutSummary = (props) => {
    return (
        <div className={ classes.CheckoutSummary }>
            <h1>Have a nice hamborger</h1>
            <div style={ { width: '100%', margin: 'auto' } }>
                <Burger ingredients={ props.ingredients } />
            </div>
            <Button
                btnType='Danger'
                clicked={ props.checkoutCancelled }
            >Cancel</Button>
            <Button
                btnType='Success'
                clicked={ props.checkoutContinued }
            >Continue</Button>
        </div>
    )
};

export default checkoutSummary;