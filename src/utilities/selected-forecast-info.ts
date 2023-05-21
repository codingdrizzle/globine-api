import { wardrobe } from "./wardrobe"

const selectedForecastInfo = (forecast: any) => {
    return {
        geo: {
            lat: wardrobe(forecast, 'location').lat,
            lon: wardrobe(forecast, 'location').lon,
        },
        weather: {
            temp_c: wardrobe(forecast, 'current').temp_c,
            temp_f: wardrobe(forecast, 'current').temp_f,
            is_day: wardrobe(forecast, 'current').is_day,
            humidity: wardrobe(forecast, 'current').humidity,
            wind_direction: wardrobe(forecast, 'current').wind_dir,
            condition: { ...wardrobe(forecast, 'current').condition },
        },
        forecast: {
            date: wardrobe(forecast, 'forecast').date,
            day: {
                avg_humidity: wardrobe(forecast, 'forecast').day.avghumidity,
                will_it_rain: wardrobe(forecast, 'forecast').day.daily_will_it_rain,
                will_it_snow: wardrobe(forecast, 'forecast').day.daily_will_it_snow,
                chance_of_rain: wardrobe(forecast, 'forecast').day.daily_chance_of_rain,
                chance_of_snow: wardrobe(forecast, 'forecast').day.daily_chance_of_snow,
                condition: { ...wardrobe(forecast, 'forecast').day.condition }
            },
            astro: { ...wardrobe(forecast, 'forecast').astro },
            hourly_update: wardrobe(forecast, 'forecast').hour.map((per_hour: any) => {
                return {
                    time: per_hour.time,
                    temp_c: per_hour.temp_c,
                    temp_f: per_hour.temp_f,
                    is_day: per_hour.is_day,
                    condition: { ...per_hour.condition },
                    will_it_rain: per_hour.will_it_rain,
                    will_it_snow: per_hour.will_it_snow,
                    chance_of_rain: per_hour.chance_of_rain,
                    chance_of_snow: per_hour.chance_of_snow,
                }
            })
        }
    }
} 

export { selectedForecastInfo }