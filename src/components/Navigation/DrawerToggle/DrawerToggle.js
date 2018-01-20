import React from 'react';
import cx from './DrawerToggle.css';

const drawerToggle = (props) => {
    return (
        <div className={cx.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;