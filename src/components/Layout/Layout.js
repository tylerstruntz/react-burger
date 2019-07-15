import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        sideDrawerVisible: true,
    }

    //set the new state depending on the old state
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerVisible: !prevState.sideDrawerVisible };
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState({ sideDrawerVisible: false });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    closed={ this.sideDrawerClosedHandler }
                    showSideDrawer={ this.state.sideDrawerVisible }
                />
                <main className={ classes.Content }>
                    { this.props.children }
                </main>
            </Aux>
        )
    }
}

export default Layout;