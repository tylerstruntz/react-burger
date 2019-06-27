import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredient}/>
                <div>Burger builder controller</div>
            </Aux>
        );
    }
}

export default BurgerBuilder