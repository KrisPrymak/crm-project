import React from 'react';

import style from './InputDateTemplate.module.css';

type InputDateTemplateProps = {
    customValue: string
    customFunc: React.Dispatch<React.SetStateAction<string>>
}

const InputDateTemplate: React.FC<InputDateTemplateProps> = ({customValue, customFunc}) => {
    return (
        <input type="text" 
            placeholder="_ _ . _ _ . _ _"
            data-date-format="DD.MM.YY"
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
            className={style.input} 
            value={customValue}
            onChange={(event) => {
                customFunc(event.target.value);
            }}
        >
        </input>
    );
};

export default InputDateTemplate;