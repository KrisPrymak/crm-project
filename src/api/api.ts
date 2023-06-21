import { instance } from './axios';

export type getListType = {
    date_start: string;
    date_end: string;
    in_out?: number;
}

export type getCallRecordType = {
    record: string
}

export const callsAPI = {
    async getList({date_start, date_end, in_out}: getListType) {
        const extraquery = in_out ? '&in_out=${in_out}' : '';
        return instance.post(`/getList?date_start=${date_start}&date_end=${date_end}${extraquery}`);
    },
    async getCallRecord({record}: getCallRecordType) {
        return instance.post(`/getRecord?record=${record}`);
    },
};