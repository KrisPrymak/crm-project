import React, { useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import classnames from 'classnames';

import { getTimespanDays } from '../../../../helpers/getTimespanDays';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { putDays } from '../../../../store/filterSlice';
import { getCalls } from '../../../../store/callsSlice';
import { getRequestObjectDate } from '../../../../helpers/getRequestObjectDate';

import style from './CalendarSection.module.css';
import SelectBar from './SelectBar/SelectBar';

const CalendarSection = () => {

    const dispatch = useAppDispatch();

    const timespan = useAppSelector(state => state.filterSlice.timespan);
    const currEndDate = useAppSelector(state => state.filterSlice.currEndDate);
    const loadingStatus = useAppSelector(state => state.callsSlice.status);

    const [isOpenSelectBar, setIsOpenSelectBar] = useState(false);
    const [currentTimespan, setCurrentTimespan] = useState(3);

    React.useEffect(() => {
        setCurrentTimespan(timespan);
    }, [timespan]);


    const handleOpenSelectBar = () => {
        if (loadingStatus !== 'pending') {
            setIsOpenSelectBar(!isOpenSelectBar);
        }
    };

    const arrowClick = (days: number) => {
        setCurrentTimespan(currentTimespan + days);
        dispatch(putDays(currentTimespan + days));
        setIsOpenSelectBar(false);
        dispatch(getCalls(getRequestObjectDate(currEndDate, currentTimespan + days)));
    };

    return (
        <div className={style.container}>
            <button
                className={style.button__left} 
                onClick={() => { arrowClick(-1); }} 
                disabled={timespan === 1 || loadingStatus === 'pending'}>
                <KeyboardArrowLeftIcon className={classnames(style.arrow_left, timespan === 1 && style.arrow_disabled)} />
            </button>
            <div className={style.timespan} onClick={handleOpenSelectBar}>
                <CalendarTodayIcon className={style.timespan__icon} />
                <span className={style.timepspan__text}>{getTimespanDays(currentTimespan)}</span>
            </div>
            <button className={style.button__right} onClick={() => arrowClick(1)} disabled={loadingStatus === 'pending'}>
                <KeyboardArrowRightIcon className={style.arrow_right} />
            </button>
            <div style={{ display: isOpenSelectBar ? 'block' : 'none' }} className={style.selectBar}>
                <SelectBar setIsOpenSelectBar={setIsOpenSelectBar} />
            </div>
        </div>
    );
};

export default CalendarSection;