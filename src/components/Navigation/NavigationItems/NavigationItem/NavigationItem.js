import React from 'react';
import cx from './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <li className={cx.NavigationItem}>
            <a
                href={props.link}
                className={props.active ? cx.active : null}
            >{props.children}</a>
        </li>
    );
};

export default navigationItem;