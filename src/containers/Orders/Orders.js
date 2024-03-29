import React, { Component } from 'react'
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/spinner/spinner'

class Orders extends Component {

    componentWillMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    key={ order.id }
                    ingredients={ order.ingredients }
                    price={ +order.price } />
            ))
        }
        return (
            <div>
                { orders }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));