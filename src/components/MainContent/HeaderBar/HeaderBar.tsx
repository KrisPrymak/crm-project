import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import avatar from './../../../assets/avatar.png';
import style from './HeaderBar.module.css';
import StaticsBlock from './StaticsBlock/StaticsBlock';
import HeaderToday from './HeaderToday/HeaderToday';

const HeaderBar = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <HeaderToday />
                <StaticsBlock />
                <SearchIcon className={style.search}/>
                <div className={style.user}>
                    <p className={style.user__name}>
                        ИП Сидорова Александра Михайловна
                    </p>
                    <KeyboardArrowDownIcon style={{ color: '#ADBFDF' }} />
                </div>
                <div className={style.avatar}>
                    <img src={avatar} alt="Avatar" />
                    <KeyboardArrowDownIcon style={{ color: '#ADBFDF' }} />
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;