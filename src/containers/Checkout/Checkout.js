import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummarry/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ConctactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

class Checkout extends Component {

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to='/' />

        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null
            summary = (
                <div>
                    { purchasedRedirect }
                    <CheckoutSummary
                        ingredients={ this.props.ings }
                        checkoutCancelled={ this.checkoutCancelled }
                        checkoutContinued={ this.checkoutContinued } />
                    <Route
                        path={ this.props.match.path + '/contact-data' }
                        // rendering contact data and this way we can pass ingredients
                        component={ ContactData } />
                </div>
            )
        }
        return summary;
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredient,
        purchased: state.order.reducerPurchased
    }
}


export default connect(mapStateToProps)(Checkout);