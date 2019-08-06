import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredient: null,
    totalPrice: 5.75,
    error: false,
};

const INGREDIENT_PRICE = {
    lettuce: .5,
    cheese: 1,
    meat: 2,
    bacon: 1.5
}

const reducer = (state = initialState, action) => {
    //switch based on the action type from props
    switch (action.type) {

        case (actionTypes.ADD_INGREDIENT):
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,    //distributes ingredient state
                    //targets certain ingredient
                    [action.ingredientName]: state.ingredient[action.ingredientName] + 1,
                },

                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
            };

        case (actionTypes.REMOVE_INGREDIENT):
            return {
                ...state,
                ingredient: {
                    ...state.ingredient,
                    //targets certain ingredient
                    [action.ingredientName]: state.ingredient[action.ingredientName] - 1,
                },

                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
            };

        case (actionTypes.SET_INGREDIENTS):
            return {
                ...state,
                ingredient: action.ingredients,
                totalPrice: 5.75,
                error: false,
            };

        case (actionTypes.FETCH_INGREDIENTS_FAILED):
            return {
                error: true
            }
        default:
            return state;

    }
};

export default reducer;