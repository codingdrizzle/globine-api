const wardrobe = (forecast: any, index: string) => {
    const indexSelector: any = {
        location: forecast.location,
        current: forecast.current,
        forecast: forecast.forecast.forecastday[0]
    }
    return indexSelector[index]
}

export {wardrobe}