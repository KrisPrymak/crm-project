export const getDateDifference = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const ms = +end - +start;
    const days = ms / 1000 / 60 / 60 / 24 + 1;
    return Math.floor(days);
};