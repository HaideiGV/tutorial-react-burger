import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import cx from './Logo.css';

const logo = (props) => (
    <div className={cx.Logo} >
        <img src={burgerLogo} alt='BurgerLogo'/>
    </div>
);

export default logo;