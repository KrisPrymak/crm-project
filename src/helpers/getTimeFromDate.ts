import { getTwoDigit } from './getTwoDigit';

export const getTimeFromDate = (string: string) => {
    const date = new Date(string);
    const hours = date.getHours();
    const mins = date.getMinutes();
    return `${hours}:${getTwoDigit(mins)}`;
};
