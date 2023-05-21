import countries from '../countries.json';
import { postFixPopulaionWithLetter } from './post-fixer';

const computedCountries = () => {
    return Object.values(countries)
        .sort((a, b) => a.name < b.name ? - 1 : a.name > b.name ? 1 : 0)
        .map(country => {
            return {
                name: country.name,
                flag: country.flag.large,
                initials: country.cioc,
                country_code: country.callingCode,
                capital_city: country.capital,
                region: country.region,
                sub_region: country.subregion,
                population: postFixPopulaionWithLetter(country.population),
                time_zone: country.timezones[0],
                currency: Object.values(country.currencies)[0],
                languages: Object.values(country.languages).map((item) => `${item}`)
            }
        });
}

export { computedCountries }