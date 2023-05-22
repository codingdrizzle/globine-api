import { getAbbreviatedFullMeaning } from "./get-abbreviated-full-meaning"

const selectedTimezoneInfo = (timezone: any) => {
    console.log(timezone)
    return {
        timezone: {
            abbreviation: timezone.data.abbreviation,
            zone_name: getAbbreviatedFullMeaning(timezone.data.abbreviation),
            datetime: timezone.data.utc_datetime,
            day_of_week: timezone.data.day_of_week,
            day_of_year: timezone.data.day_of_year,
            timezone: timezone.data.timezone,
            utc_offset: `UTC${timezone.data.utc_offset}`,
            week_number: timezone.data.week_number
        }
    }
}

export { selectedTimezoneInfo }