import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import style from './BalanceButton.module.css';

const BalanceButton = () => {
    return (
        <button className={style.balance}>
            Баланс: <span className={style.balance_summ}>
                272 &#8381;
            </span>
            <AddCircleIcon className={style.balance__addIcon} />
        </button>
    );
};

export default BalanceButton;