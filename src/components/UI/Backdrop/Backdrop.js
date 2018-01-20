import React from 'react';
import cx from './Backdrop.css';

const backdrop = (props) => {
    return props.show ? <div className={cx.Backdrop} onClick={props.clicked}></div> : null
};

export default backdrop;