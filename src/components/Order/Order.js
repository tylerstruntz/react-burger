import React from 'react';
import classes from './Order.css';

const order = (props) => {
    const ingredientsArray = [];
    for(let ingredientName in props.ingredients) {
        ingredientsArray.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredientsArray.map(ig => {
    return <span
                key={ig.name}
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }}>{ig.name} ({ig.amount})<br /></span>;
    })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;