import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummarry/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ConctactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = 0;
        //loop through parameters
        for (let param of query.entries()) {
            //['salad', '1'] turn ingredient into following format
            if(param[0] === 'price') {
                totalPrice = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: totalPrice
        })

    }
    

    checkoutCancelled= () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    // rendering contact data and this way we can pass ingredients
                    render={(props) => (<ContactData 
                                            ingredients={this.state.ingredients} 
                                            price={this.state.totalPrice}
                                            {...props}/>)} />
            </div>
        )
    }
};

export default Checkout;