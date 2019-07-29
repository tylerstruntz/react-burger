import * as actionTypes from './actions';

const initialState = {
    ingredient: {
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 5.75,
};

const INGREDIENT_PRICE = {
    lettuce: .5,
    cheese: 1,
    meat: 2,
    bacon: 1.5
}

const reducer = (state = initialState, action) => {
    //switch based on the action type from props
    switch(action.type) {

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

        default: 
            return state;

    }
};

export default reducer;