import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
    currentSelectCalls: 'all' | 'incoming' | 'outcoming'
    timespan: number
    currEndDate: Date
}

const initialState: FilterState = {
    currentSelectCalls: 'all',
    timespan: 3,
    currEndDate: new Date(),
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectFilter (state, action) {
            state.currentSelectCalls = action.payload;
        },
        minusDays (state) {
            state.timespan-=1;
        },
        plusDays (state) {
            state.timespan+=1;
        },
        putDays (state, action) {
            state.timespan = action.payload;
        },
    },
});

export const { selectFilter, minusDays, plusDays, putDays } = filterSlice.actions;

export default filterSlice.reducer;