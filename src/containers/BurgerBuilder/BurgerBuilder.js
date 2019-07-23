import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICE = {
    lettuce: .5,
    cheese: 1,
    meat: 2,
    bacon: 1.5
}

class BurgerBuilder extends Component {
    state = {
        ingredient: null,
        totalPrice: 5.75,
        purchasable: false,
        purchaseOrder: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://react-burger-55754.firebaseio.com/ingredient.json')
            .then(response => {
                this.setState({ingredient: response.data});
            })
            .catch(error => {
                this.setState({error: true}) 
            });
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
        // alert('You Continue');
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.state.ingredient,
            price: this.state.totalPrice,
            customer: {
                name: 'tyler struntz',
                address: {
                    street: '250 exchange blvd',
                    state: 'New York',
                    zipCode: 14624,
                },
                email: 'tylerstruntz@gmail.com',
            },
            deliverMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchaseOrder: false })
            })
            .catch(err => {
                this.setState({ loading: false, purchaseOrder: false })
            });
    }

    render() {
        const disabeledInfo = {
            ...this.state.ingredient
        };

        for(let key in disabeledInfo) {
            disabeledInfo[key] = disabeledInfo[key] <= 0;
        };

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients cant be added right now</p> : <Spinner />;

        if(this.state.ingredient !== null) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredient}/>
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
            orderSummary = <OrderSummary 
                ingredient={this.state.ingredient}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinues={this.purchaseContinueHandler}
                orderPrice={this.state.totalPrice} />;
        }

        if(this.state.loading) {
            orderSummary = <Spinner />
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchaseOrder} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);