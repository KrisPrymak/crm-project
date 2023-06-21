export const getTimespanDays = (days: number) => {
    if (days === 7) return 'Неделя';
    if (days === 30) return 'Месяц';
    if (days === 365) return 'Год';
    if (days > 10 && [11, 12, 13, 14].includes(days % 100)) return `${days} дней`;
    const last_num = days % 10;
    if (last_num === 1) return `${days} день`;
    if ([2, 3, 4].includes(last_num)) return `${days} дня`;
    if ([5, 6, 7, 8, 9, 0].includes(last_num)) return`${days} дней`;
};
