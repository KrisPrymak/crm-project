import React from 'react';
import { SvgIcon } from '@mui/material';
import classNames from 'classnames';

import { MenuListData } from '../../../helpers/LocalDatas';

import style from './MenuList.module.css';

const MenuList = () => {

    return (
        <div className={style.menuList}>
            {MenuListData.map(item => {
                return (
                    <div key={item.id} className={classNames(style.menuItem, item.text === 'Звонки' && style.active)}>
                        <SvgIcon component={item.img} className={style.svg} />
                        <span className={style.menuItem__text}>{item.text}</span>
                    </div>
                );
            })}
        </div >
    );
};

export default MenuList;