import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummarry/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ConctactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            meat: 1, 
            cheese: 1,
            lettuce: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        //loop through parameters
        for (let param of query.entries()) {
            //['salad', '1'] turn ingredient into following format
            ingredients[param[0]] = +param[1];
        }
        this.setState({
            ingredients: ingredients,
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
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        )
    }
};

export default Checkout;