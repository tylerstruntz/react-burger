import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

//this component holds the controls, the order summary and the actual burger
class BurgerBuilder extends Component {

    //relevant UI states only
    state = {
        // ingredient: null,  --> can now use redux (ings)
        purchaseOrder: false,
    }

    //when the component does mount call on init ingredients
    //to get the initial ingredients from firebase.
    componentDidMount() {
        console.log(this.props);
        this.props.onInitIngredients();
    }


    //map the ingredients. put them in an ordered pair
    //this way we can give it a price
    updatePurchasableState(ingredient) {
        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey];
        }).reduce((sum, el) => {
            return sum + el;    //el = igKey
        }, 0);

        return sum > 0;
    }

    //sets state to true.
    purchaseOrderHandler = () => {
        this.setState({ purchaseOrder: true });
    }

    //sets purchase order to false
    purchaseCancelHandler = () => {
        this.setState({ purchaseOrder: false });
    }

    //invoke method then route user to new page
    //with react router
    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
        const disabeledInfo = {
            ...this.props.ings
        };

        for (let key in disabeledInfo) {
            disabeledInfo[key] = disabeledInfo[key] <= 0;
        };

        let orderSummary = null;
        let burger = this.props.err ? <p>Ingredients cant be added right now</p> : <Spinner />;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={ this.props.ings } />
                    <BuildControls
                        ingredientAdded={ this.props.onIngredientAdded }
                        ingredientRemoved={ this.props.onIngredientRemoved }
                        disabled={ disabeledInfo }
                        price={ this.props.price }
                        purchasable={ this.updatePurchasableState(this.props.ings) }
                        orderNowClicked={ this.purchaseOrderHandler }
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredient={ this.props.ings }
                purchaseCanceled={ this.purchaseCancelHandler }
                purchaseContinues={ this.purchaseContinueHandler }
                orderPrice={ this.props.price } />;
        }

        return (
            <Aux>
                <Modal show={ this.state.purchaseOrder } modalClosed={ this.purchaseCancelHandler }>
                    { orderSummary }
                </Modal>
                { burger }
            </Aux>
        );
    }
}

//use redux store to get props
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredient,
        price: state.burgerBuilder.totalPrice,
        err: state.burgerBuilder.error,
    }
}

//actions that this class will use.
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));