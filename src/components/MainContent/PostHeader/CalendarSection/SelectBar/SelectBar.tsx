import * as React from 'react';
import classNames from 'classnames';

import { getRequestObjectDate } from '../../../../../helpers/getRequestObjectDate';
import { getCalls } from '../../../../../store/callsSlice';
import { putDays } from '../../../../../store/filterSlice';
import { useAppDispatch, useAppSelector } from '../../../../../store/store';
import DatePicker from '../DatePicker/DatePicker';
import { optionsData } from '../../../../../helpers/LocalDatas';

import style from './SelectBar.module.css';


type SelectBarProps = {
  setIsOpenSelectBar: React.Dispatch<React.SetStateAction<boolean>>
}

const SelectBar: React.FC<SelectBarProps> = ({setIsOpenSelectBar}) => {
    
    const dispatch = useAppDispatch();
    const timespan = useAppSelector(state => state.filterSlice.timespan);
    const currEndDate = useAppSelector(state => state.filterSlice.currEndDate);

    const classRules = (value: number) => {
        return classNames(style.item, timespan === value && style.active);
    };

    const handleSelect = (value: number) => {
        dispatch(putDays(value));
        setIsOpenSelectBar(false);
        dispatch(getCalls(getRequestObjectDate(currEndDate, value)));
    };

    return (
        <>
            {optionsData.map(item => {
                return (
                    <div key={item.id} className={classRules(item.value)} onClick={() => {handleSelect(item.value);}}>
                        {item.text}
                    </div>
                );
            })}
            <DatePicker setIsOpenSelectBar={setIsOpenSelectBar}/>
        </>
    );
};

export default SelectBar;