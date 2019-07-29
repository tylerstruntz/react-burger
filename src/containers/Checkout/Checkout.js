import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummarry/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ConctactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {

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
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    // rendering contact data and this way we can pass ingredients
                    component={ContactData} />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        ings: state.ingredient
    }
}

export default connect(mapStateToProps, null)(Checkout);