import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Ingredients/Ingredients';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please build your burger :)</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;