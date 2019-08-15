import React from 'react';
import classes from './Order.css';

//this is the actual order. we map the ingredient array 
//that holds the ammount of ingredients for the order.
//we then display the ingredients, their amount, and the 
//price of the order.
const order = (props) => {
    const ingredientsArray = [];
    for (let ingredientName in props.ingredients) {
        ingredientsArray.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredientsArray.map(ig => {
        return <span
            key={ ig.name }
            style={ {
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            } }>{ ig.name } ({ ig.amount })<br /></span>;
    })
    return (
        <div className={ classes.Order }>
            <p>Ingredients: { ingredientOutput } </p>
            <p>Price: <strong>${ props.price.toFixed(2) }</strong></p>
        </div>
    );
};

export default order;