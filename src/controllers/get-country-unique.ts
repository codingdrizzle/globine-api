import axios from 'axios';
import { Request, Response, Router } from 'express';
import logger from '../core/logger';
import { FORECAST,TIMEZONE } from '../core/url-type';
import { axiosClient } from '../utilities/axios-client';
import { computedCountryDetails } from '../utilities/compute-country-info';
import { selectedForecastInfo } from '../utilities/selected-forecast-info';
import { selectedTimezoneInfo } from '../utilities/selected-time-zone';

const getCountryUnique = async (req: Request, res: Response) => {
    try {
        const { country_name } = req.params;
        const forecast = await axiosClient(FORECAST).get('/forecast.json', { params: { q: country_name } })
        const timezone = await axiosClient(TIMEZONE).get(`http://worldtimeapi.org/api/timezone/${forecast.data.location.tz_id}`)
        return res.json({ ...computedCountryDetails(country_name), ...selectedTimezoneInfo(timezone), ...selectedForecastInfo(forecast.data) })
    } catch (error: any) {
        logger.error(error)
        return res.status(error.status ? error.status : 400).json(error.message)
    }
}

export { getCountryUnique }