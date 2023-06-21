import React, { useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { useAppDispatch } from '../../../../../store/store';
import { getCalls } from '../../../../../store/callsSlice';
import { putDays } from '../../../../../store/filterSlice';
import { getDateDifference } from '../../../../../helpers/getDateDifference';
import InputDateTemplate from '../../../../common/InputDateTemplate/InputDateTemplate';

import style from './DatePicker.module.css';


type DatePickerProps = {
    setIsOpenSelectBar: React.Dispatch<React.SetStateAction<boolean>>
}

const DatePicker: React.FC<DatePickerProps> = ({setIsOpenSelectBar}) => {

    const dispatch = useAppDispatch();

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleClick = () => {
        setIsOpenSelectBar(false);
        if (startDate && endDate) {
            dispatch(getCalls({
                date_start: startDate,
                date_end: endDate, 
            }));
        } else {
            alert('Не заполнено');
        }
        setStartDate('');
        setEndDate('');
        dispatch(putDays(getDateDifference(startDate, endDate)));
    };

    return (
        <div className={style.container}>
            <span className={style.title}>Указать даты</span>
            <div className={style.datebox}>
                <div className={style.datebox__inputs}>
                    <InputDateTemplate customValue={startDate} customFunc={setStartDate}/>
                    <span className={style.divider}>-</span>
                    <InputDateTemplate customValue={endDate} customFunc={setEndDate}/>
                </div>
                <button className={style.calendar__button} onClick={handleClick}>
                    <CalendarTodayIcon className={style.calendar__icon} />
                </button>
            </div>
        </div>
    );
};

export default DatePicker;