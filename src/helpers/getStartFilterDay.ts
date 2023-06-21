import { getFormatFilterDay } from './getFormatFilterDay';

export const getStartFilterDay = (endDate: Date, timespan: number) => {
    const endDay = new Date(endDate); 
    const startDate = endDay.setDate(endDay.getDate() - timespan + 1);
    return getFormatFilterDay(new Date(startDate));
};