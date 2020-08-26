import { Request } from '../request';
import { AxiosRequestConfig } from 'axios';

export class UserApi extends Request {
    constructor(config: AxiosRequestConfig) {
        super(config)
    }

    async login (data: UserLogin): Promise<any> {
        const resource = "WebApi/Get"
        const query = {
            C: 'AVEVA.CDMS.WebApi.DBSourceController',
            A: 'Login',
            UserName: data.username,
            Password: data.password
        }
        const result = await this.get<any> (resource, query)
        return result
    }
}

export interface UserLogin {
    password: String,
    username: String,
}