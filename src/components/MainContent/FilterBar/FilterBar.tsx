import React from 'react';

import style from './FilterBar.module.css';
import FilterTemplate from './FilterTemplate/FilterTemplate';
import SearchCalls from './SearchCalls/SearchCalls';

const FilterBar = () => {
    return (
        <div className={style.container}>
            <SearchCalls />
            <FilterTemplate />
        </div>
    );
};

export default FilterBar;