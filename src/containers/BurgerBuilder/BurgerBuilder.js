import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    lettuce: .5,
    cheese: 1,
    meat: 2,
    bacon: 1.5
}

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5.75,
        purchasable: false,
        purchaseOrder: false,
    }

    updatePurchasableState (ingredient) {
        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey];
        }).reduce((sum, el) => {
            return sum + el;    //el = igKey
        }, 0);

        this.setState({ purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredient
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredient: updatedIngredients });
        this.updatePurchasableState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredient
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ totalPrice: newPrice, ingredient: updatedIngredients });
        this.updatePurchasableState(updatedIngredients);
    }

    purchaseOrderHandler = () => {
        this.setState({ purchaseOrder: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchaseOrder: false });
    }

    purchaseContinueHandler = () => {
        alert('You Continue');
    }

    render() {
        const disabeledInfo = {
            ...this.state.ingredient
        };
        for(let key in disabeledInfo) {
            disabeledInfo[key] = disabeledInfo[key] <= 0;
        };
        return (
            <Aux>
                <Modal show={this.state.purchaseOrder} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredient={this.state.ingredient}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinues={this.purchaseContinueHandler}
                        orderPrice={this.state.totalPrice}/>
                </Modal>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabeledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    orderNowClicked={this.purchaseOrderHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder