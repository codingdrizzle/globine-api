import { ICredentials } from "../utilities/axios-client"
import 'dotenv/config'

export const FORECAST: ICredentials = {
    baseURL: process.env.API_URL!,
    key: process.env.API_TOKEN
}

export const TIMEZONE: ICredentials = {
    baseURL: process.env.TIME_ZONE_API!
}