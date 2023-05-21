import { Request, Response, Router } from 'express';
import logger from '../core/logger';
import { computedCountries } from '../utilities/compute-countries';

const getAllCountries = async (req: Request, res: Response) => {
    try {
        return res.json(computedCountries())
    } catch (error:any) {
        logger.error(error)
        return res.status(error.status ? error.status : 400).json(error)   
    }
}

export { getAllCountries }