import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

interface Params {
    [key: string]: any
}

interface GetProps {
    url: string,
    params?: Params,
    config?: AxiosRequestConfig
}

interface PostProps {
    url: string,
    data?: Params,
    config?: AxiosRequestConfig
}

export const Client = {
    get: async function <T>({url, params, config}: GetProps) {
        const response = await axios.get<any, AxiosResponse<T>>(url, {
            params,
            ...config
        });

        return response.data;
    },

    post: async function <T>({url, config, data}: PostProps) {
        const response = await axios.post(url, data, config);

        return response.data;
    },
};