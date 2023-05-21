import { Request, Response, Router } from 'express';
import logger from '../core/logger';
import countries from '../countries.json';
import { computeFilteredCountries } from '../utilities/compute-filtered-countries';

const getFilteredCountries = async (req: Request, res: Response) => {
    try {
        const { filter_key } = req.params
            
        return res.json(computeFilteredCountries(filter_key)) 
    } catch (error: any) {
        logger.error(error)
        return res.status(error.status? error.status : 400).json(error)
    }
}

export { getFilteredCountries }