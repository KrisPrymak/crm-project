import React from 'react';

import CallList from './CallList/CallList';
import FilterBar from './FilterBar/FilterBar';
import HeaderBar from './HeaderBar/HeaderBar';
import style from './MainContent.module.css';
import PostHeader from './PostHeader/PostHeader';

const MainContent = () => {
    return (
        <div className={style.mainContent}>
            <HeaderBar />
            <div className={style.mainContent__container}>
                <PostHeader />
                <FilterBar />
                <CallList />
            </div>
        </div>
    );
};

export default MainContent;