import countries from '../countries.json';
import { postFixPopulaionWithLetter } from './post-fixer';

const computedCountryDetails = (country_name: string) => {
    return Object.values(countries)
        .filter(country => {
            const countryName = country_name.replace('_', ' ')
            return country.name === countryName && country
        })
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
                currency: Object.values(country.currencies)[0].name,
                languages: Object.values(country.languages).map((item) => `${item}`)
            }
        })[0];
}

export { computedCountryDetails }