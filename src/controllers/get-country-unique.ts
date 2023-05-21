import { Request, Response, Router } from 'express';
import logger from '../core/logger';
import { axiosClient } from '../utilities/axios-client';
import { computedCountryDetails } from '../utilities/compute-country-info';
import { selectedForecastInfo } from '../utilities/selected-forecast-info';

const getCountryUnique = async (req: Request, res: Response) => {
    try {
        const { country_name } = req.params;
        const forecast = await axiosClient.get('/forecast.json', { params: { q: country_name } })
        return res.json({ ...computedCountryDetails(country_name), ...selectedForecastInfo(forecast.data) })
    } catch (error: any) {
        logger.error(error)
        return res.status(error.status ? error.status : 400).json(error)
    }
}

export { getCountryUnique }