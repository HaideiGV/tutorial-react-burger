import React from 'react';
import cx from './Button.css';


const button = (props) => {
    return <button
        className={[cx.Button, cx[props.btnType]].join(' ')}
        onClick={props.clicked}
    >{props.children}</button>
};

export default button;