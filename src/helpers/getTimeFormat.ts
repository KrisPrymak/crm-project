
export const getTimeFormat = (number: number) => {
    if (number > 59) {
        const min = Math.trunc(number / 60);
        const sec = number - min*60 < 10 ? `0${number - min*60}` : `${number - min*60}`;
        return `${min}:${sec}`;
    } else if (number < 10) {
        return `0:0${number}`;
    } else {
        return `0:${number}`;
    }
};