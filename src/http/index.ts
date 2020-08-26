import { UserApi } from './api/user';
import { AxiosRequestConfig } from 'axios';

export class Api {
    public config: AxiosRequestConfig = {
        baseURL: process.env.BASE_URL,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 10000,
    };

    public user: UserApi = new UserApi(this.config);

    constructor (config?: AxiosRequestConfig) {
        if (config) {
            this.config = {
                ...this.config,
                ...config
            }
        }
    }
}

export const api = new Api();