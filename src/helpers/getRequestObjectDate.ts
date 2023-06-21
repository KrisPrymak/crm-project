import { getFormatFilterDay } from './getFormatFilterDay';
import { getStartFilterDay } from './getStartFilterDay';

export const getRequestObjectDate = (endDate: Date, timespan: number) => {
    const object = {
        date_start: getStartFilterDay(endDate, timespan), date_end: getFormatFilterDay(endDate),
    }; 
    return object;
};