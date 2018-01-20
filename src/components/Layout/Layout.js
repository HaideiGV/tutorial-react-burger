import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SiteDrawer from '../Navigation/SiteDrawer/SiteDrawer';

class Layout extends Component {

    state = {
        showSiteDrawer: false
    };

    siteDrawerCloseHandler = () => {
        this.setState({showSiteDrawer: false});
    };

    siteDrawerToggleHandler = (prevState) => {
        this.setState((prevState) => {
            return {showSiteDrawer: !prevState.showSiteDrawer}
        })
    };

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.siteDrawerToggleHandler} />
                <SiteDrawer
                    open={this.state.showSiteDrawer}
                    closed={this.siteDrawerCloseHandler}
                />
                <main className={classes.Content} >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;