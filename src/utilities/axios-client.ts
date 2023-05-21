import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: `${process.env.API_URL}`,
    params: {
        key: `${process.env.API_TOKEN}`,
    },
    timeout: 10000,
})
