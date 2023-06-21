import React, { FC } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import style from './BlueButton.module.css';

interface BlueButtonType {
    value: 'ADD_ORDER' | 'PAYMENT'
}

const BlueButton: FC<BlueButtonType> = ({ value }) => {
    return (
        <button className={style.button}>
            {value === 'ADD_ORDER'
                ?
                <>
                    <span>Добавить заказ</span>
                    <AddCircleIcon fontSize="large" className={style.icon} />
                </>
                :
                <>
                    <span>Оплата</span>
                    <ErrorIcon fontSize="large" className={style.icon} />
                </>}
        </button>
    );
};

export default BlueButton;