/**
 * base request
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class Request {
    private api: AxiosInstance;

    public constructor (config: AxiosRequestConfig) {
        this.api = axios.create(config)

        // request 拦截器
        this.api.interceptors.request.use((param: AxiosRequestConfig) => {
            return {
                ...param
            }
        })

        // response 拦截器
        this.api.interceptors.response.use((param: AxiosResponse) => {
            return {
                ...(param.data)
            }
        })

        // config header
        // this.api.defaults.headers.common[''] = ''
    }

    
    public getUri (config?: AxiosRequestConfig): string {
        return this.api.getUri(config)
    }

    public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
        return this.api.request(config)
    }

    public get<T, R = AxiosResponse<T>> (url: string, data?: Object, config?: AxiosRequestConfig): Promise<R> {
        return this.api.get(url, {
            ...config,
            params: data
        })
    }

    public post<T, R = AxiosResponse<T>> (url: string, data?: Object, config?: AxiosRequestConfig): Promise<R> {
        return this.api.post(url, data, config)
    }
    
    public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.delete(url, config)
    }

    public put<T, R = AxiosResponse<T>> (url: string, data?: Object, config?: AxiosRequestConfig): Promise<R> {
        return this.api.put(url, data, config)
    }

    public patch<T, R = AxiosResponse<T>> (url: string, data?: Object, config?: AxiosRequestConfig): Promise<R> {
        return this.api.patch(url, data, config)
    }
}