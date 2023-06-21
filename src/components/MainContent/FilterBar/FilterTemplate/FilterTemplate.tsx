import { Select, Space } from 'antd';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useAppDispatch } from '../../../../store/store';
import { selectFilter } from '../../../../store/filterSlice';

import style from './FilterTemplate.module.css';

const FilterTemplate: React.FC = () => {
    const dispacth = useAppDispatch();

    const handleSelect = (value: string) => {
        dispacth(selectFilter(value));
    };

    return (
        <Space wrap className={style.container}>
            <Select
                defaultValue="all"
                suffixIcon={<KeyboardArrowDownIcon className={style.arrow}/>}
                className={style.select}
                bordered={false}
                onChange={handleSelect}
                options={[
                    { value: 'all', label: 'Все типы' },
                    { value: 'incoming', label: 'Входящие' },
                    { value: 'outcoming', label: 'Исходящие' },
                ]}
            />

            <Select
                defaultValue="all"
                suffixIcon={<KeyboardArrowDownIcon className={style.arrow}/>}
                className={style.select}
                bordered={false}
                options={[
                    { value: 'all', label: 'Все сотрудники' },
                ]}
            />

            <Select
                defaultValue="all calls"
                className={style.select}
                suffixIcon={<KeyboardArrowDownIcon className={style.arrow}/>}
                bordered={false}
                options={[
                    { value: 'all calls', label: 'Все звонки' },
                    { value: 'all clients', label: 'Все клиенты' },
                    { value: 'new clients', label: 'Новые клиенты' },
                    { value: 'all performers', label: 'Все исполнители' },
                    { value: 'app', label: 'Через приложение' },
                    { value: 'other calls', label: 'Прочие звонки' },
                ]}
            />
            <Select
                defaultValue="all sources"
                suffixIcon={<KeyboardArrowDownIcon className={style.arrow}/>}
                className={style.select}
                bordered={false}
                options={[
                    { value: 'all sources', label: 'Все источники' },
                ]}
            />
            <Select
                defaultValue="all scores"
                suffixIcon={<KeyboardArrowDownIcon className={style.arrow}/>}
                className={style.select}
                bordered={false}
                options={[
                    { value: 'all scores', label: 'Все оценки' },
                    { value: 'all clients', label: 'Распознать' },
                    { value: 'new clients', label: 'Скрипт не использован' },
                    { value: 'all performers', label: 'Плохо' },
                    { value: 'app', label: 'Хорошо' },
                    { value: 'other calls', label: 'Отлично' },
                ]}
            />
            <Select
                defaultValue="all errors"
                suffixIcon={<KeyboardArrowDownIcon className={style.arrow}/>}
                className={style.select}
                bordered={false}
                options={[
                    { value: 'all errors', label: 'Все ошибки' },
                    { value: 'welcome', label: 'Приветствие' },
                    { value: 'name', label: 'Имя' },
                    { value: 'price', label: 'Цена' },
                    { value: 'sale', label: 'Скидка' },
                    { value: 'preorder', label: 'Предзаказ' },
                    { value: 'gratitude', label: 'Благодарность' },
                    { value: 'stopwords', label: 'Стоп слова' },
                ]}
            />

        </Space>
    );
};

export default FilterTemplate;