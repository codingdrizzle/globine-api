import { Request, Response, Router } from 'express';
import logger from '../core/logger';
import countries from '../countries.json';

const getAllCountries = async (req: Request, res: Response) => {
    try {
        const sorted_countries = Object.values(countries)
            .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
    
        return res.json(sorted_countries)
    } catch (error:any) {
        logger.error(error)
        return res.status(error.status ? error.status : 400).json(error)   
    }
}

export { getAllCountries }