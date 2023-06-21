import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import style from './SearchCalls.module.css';

const SearchCalls = () => {
    return (
        <div className={style.search}>
            <SearchIcon className={style.search__icon}/>
                Поиск по звонкам
        </div>
    );
};

export default SearchCalls;