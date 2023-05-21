import { Request, Response, Router } from 'express';
import logger from '../core/logger';
import countries from '../countries.json';

const getFilteredCountries = async (req: Request, res: Response) => {
    try {
        const { filter_key } = req.params
        const filtered_countries = Object.values(countries)
            .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
            .filter((country) => country.region === filter_key)
        return res.json(filtered_countries) 
    } catch (error: any) {
        logger.error(error)
        return res.status(error.status? error.status : 400).json(error)
    }
}

export { getFilteredCountries }