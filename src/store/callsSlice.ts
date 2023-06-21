import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { callsAPI, getCallRecordType, getListType } from '../api/api';

export interface CallsItem {
    id: number
    partnership_id: string
    partner_data: {
        id: string
        name: string
        phone: string
    };
    date: string
    date_notime: string
    time: number;
    from_number: string;
    from_extension: string;
    to_number: string;
    to_extension: string;
    is_skilla: number;
    status: string;
    record: string;
    line_number: string;
    in_out: number;
    from_site: number;
    source: string;
    errors: any[];
    disconnect_reason: string;
    results: any[];
    stages: any[];
    abuse: any[];
    contact_name: string;
    contact_company: string
    person_id: number;
    person_name: string
    person_surname: string
    person_avatar: string
}

interface CallsState {
    status: string | null,
    error: any,
    calls: Array<CallsItem> | null
    currentRecord: any
}

const initialState: CallsState = {
    status: null,
    error: null,
    calls: null,
    currentRecord: null,
};

export const getCalls = createAsyncThunk(
    'calls/getCalls',
    async function ({date_start, date_end, in_out}: getListType, {rejectWithValue}) {
        try {
            const response = await callsAPI.getList({date_start, date_end, in_out});
            return response.data.results;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);

const ctx = new AudioContext();

export const getCallRecord = createAsyncThunk(
    'calls/getCallRecord',
    async function ({record}: getCallRecordType, {rejectWithValue}) {
        try {
            fetch(`https://api.skilla.ru/mango/getRecord?record=${record}`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer testtoken',
                },
            })
                .then((data) => data.arrayBuffer())
                .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
                .then((decodedAudio) => {
                    return decodedAudio;
                })
                .catch((error) => console.log(error.message));

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    },
);


const callsSlice = createSlice({
    name: 'calls',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCalls.pending, (state) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(getCalls.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.calls = action.payload;
        });
        builder.addCase(getCalls.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        });
        builder.addCase(getCallRecord.pending, (state) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(getCallRecord.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.currentRecord = action.payload;
        });
        builder.addCase(getCallRecord.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        });
    },
});

// export const {  } = callsSlice.actions;

export default callsSlice.reducer;