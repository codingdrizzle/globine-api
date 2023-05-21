import { Router } from 'express';
const router = Router();

import { getAllCountries, getCountryUnique, getFilteredCountries } from '../controllers';

router.get('/countries', getAllCountries)
router.get('/countries/filter/:filter_key', getFilteredCountries)
router.get('/country/:country_name', getCountryUnique)

export { router };
