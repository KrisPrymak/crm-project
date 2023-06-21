import { CallsItem } from '../store/callsSlice';

export const filterCalls = (array: CallsItem[] | null, filter: string) => {
    if (array) {
        if (filter === 'all') {
            return array;
        } else if (filter === 'incoming') {
            return array.filter(item => item.in_out === 1);
        } else if (filter === 'outcoming') {
            return array.filter(item => item.in_out === 0);
        }
    }
};