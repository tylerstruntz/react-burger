import React, { Component } from 'react'
import classes from './Modal.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

//shows a form that comes to the screen. used when the user confirms they want to place 
//their order. will usually hold a number of inputs the developer specifies
class Modal extends Component {

    //lifecycle methods prevent ordersummary from unessesarily updating
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    //lifecycle methods prevent ordersummary from unessesarily updating
    //TODO: uncomment if getting error with ordersummary updating
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('[Modal] WillUpdate')
    // }


    render() {
        return (
            <Aux>
                <Backdrop show={ this.props.show } clicked={ this.props.modalClosed } />
                <div
                    className={ classes.Modal }
                    style={ {
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    } }>
                    { this.props.children }
                </div>
            </Aux>
        )
    }
}

export default Modal;