import React from 'react';
import cx from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

const navigationItems = (props) => {
    return (
        <ul className={cx.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
};

export default navigationItems;