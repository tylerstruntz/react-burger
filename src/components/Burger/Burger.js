import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Ingredients/Ingredients';

const Burger = (props) => {
    let ingredientArray = Object.keys(props.ingredient).map((ingredientKey) => {
        return [...Array(props.ingredient[ingredientKey])].map((_, index) => {
            return <BurgerIngredient key={ingredientKey+index} type={ingredientKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(ingredientArray.length === 0) {
        ingredientArray = <p>Please build your burger :)</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredientArray}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default Burger;