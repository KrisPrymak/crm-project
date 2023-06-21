import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.skilla.ru/mango',
    headers: {
        'Authorization' : 'Bearer testtoken',
    },
});