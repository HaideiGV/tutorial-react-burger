import React from 'react';
import cx from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (
        <header className={cx.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={cx.Logo}>
                <Logo  />
            </div>
            <nav className={cx.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;