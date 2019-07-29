import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';


class BurgerBuilder extends Component {

    //relevant UI states only
    state = {
        // ingredient: null,  --> can now use redux (ings)
        purchaseOrder: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // axios.get('https://react-burger-55754.firebaseio.com/ingredient.json')
        //     .then(response => {
        //         this.setState({ingredient: response.data});
        //     })
        //     .catch(error => {
        //         this.setState({error: true}) 
        //     });
    }
    

    updatePurchasableState (ingredient) {
        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey];
        }).reduce((sum, el) => {
            return sum + el;    //el = igKey
        }, 0);

        return sum > 0;
    }


    purchaseOrderHandler = () => {
        this.setState({ purchaseOrder: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchaseOrder: false });
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() { 
        const disabeledInfo = {
            ...this.props.ings
        };

        for(let key in disabeledInfo) {
            disabeledInfo[key] = disabeledInfo[key] <= 0;
        };

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients cant be added right now</p> : <Spinner />;

        if(this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded }
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabeledInfo}
                        price={this.props.price}
                        purchasable={this.updatePurchasableState(this.props.ings)}
                        orderNowClicked={this.purchaseOrderHandler}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary 
                ingredient={this.props.ings}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinues={this.purchaseContinueHandler}
                orderPrice={this.props.price} />;
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


const mapStateToProps = state => {
    return {
       ings: state.ingredient,
       price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));