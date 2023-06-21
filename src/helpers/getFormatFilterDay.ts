import { getTwoDigit } from './getTwoDigit';

export const getFormatFilterDay = (date: Date) => {
    return `${date.getFullYear()}-${getTwoDigit(
        date.getMonth() + 1,
    )}-${getTwoDigit(date.getDate())}`;
};
