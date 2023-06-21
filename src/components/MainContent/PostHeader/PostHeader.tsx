import React from 'react';

import style from './PostHeader.module.css';
import CalendarSection from './CalendarSection/CalendarSection';
import BalanceButton from './BalanceButton/BalanceButton';

const PostHeader = () => {
    return (
        <div className={style.container}>
            <BalanceButton />
            <CalendarSection />
        </div>
    );
};

export default PostHeader;