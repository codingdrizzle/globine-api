import axios from 'axios'

export interface ICredentials {
    baseURL: string;
    key?: string
} 

export const axiosClient = (CREDENTIALS: ICredentials) => axios.create({
    baseURL: `${CREDENTIALS.baseURL}`,
    params: {
        key: `${CREDENTIALS.key}`,
    },
    timeout: 10000,
})
