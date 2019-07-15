import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(nextProps, nextState) {
        console.log('[OrderSummary] WillUpdate');
    }


    render() {
        const ingredientsUsed = Object.keys(this.props.ingredient).map(igKey => {
            return (
                <li key={ igKey }>
                    <span style={ { textTransform: 'capitalize' } }>{ igKey }</span>: { this.props.ingredient[igKey] }
                </li>
            )
        });
        return (
            <Aux>
                <h3>Your Order</h3><br />
                <p>Ingredients</p>
                <ul>
                    { ingredientsUsed }
                </ul>
                <p>Your order costs: $<strong>{ this.props.orderPrice.toFixed(2) }</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    btnType='Danger'
                    clicked={ this.props.purchaseCanceled }>Cancel</Button>
                <Button
                    btnType='Success'
                    clicked={ this.props.purchaseContinues }>Continue</Button>
            </Aux>
        )
    }

};

export default OrderSummary;