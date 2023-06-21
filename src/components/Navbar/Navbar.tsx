import React from 'react';

import BlueButton from '../common/BlueButton/BlueButton';
import logoImg from '../../assets/logoSkilla.svg';

import style from './Navbar.module.css';
import MenuList from './MenuList/MenuList';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <img className={style.logo} src={logoImg} alt="Logo" />
            <MenuList />
            <div className={style.buttons}>
                <BlueButton value="ADD_ORDER"/>
                <BlueButton value="PAYMENT"/>
            </div>
        </div>
    );
};

export default Navbar;