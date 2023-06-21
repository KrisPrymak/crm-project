import React from 'react';
import classNames from 'classnames';

import { staticsData } from '../../../../helpers/LocalDatas';

import style from './StaticsBlock.module.css';

const StaticsBlock = () => {
    return (
        <div className={style.statics}>
            {staticsData.map(item => {
                return (
                    <div key={item.id}>
                        <p className={style.statics__text}>
                            {item.text}
                            <span className={classNames(style.description, style[item.color])}>{item.description}</span>
                        </p>
                        <div className={style[`statics__progress_${item.color}`]}></div>
                    </div>
                );
            })}
        </div>
    );
};

export default StaticsBlock;