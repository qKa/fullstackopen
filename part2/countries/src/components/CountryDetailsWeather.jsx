import { useState, useEffect } from "react"
import weatherService from "../services/weather"

const CountryDetailsWeather = ({ capital }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (capital) {
            weatherService.getWeatherByCapital(capital)
                .then(response => {
                    setWeather(response.data)
                    // console.log('[getWeatherByCapital] response:', response.data)
                })
                .catch(error => {
                    console.error('[getWeatherByCapital] Error fetching weather:', error)
                })
        }
    }, [capital])

    return (
        <div>
            <h3>Weather in {capital}</h3>
            {weather ? (
                <div>
                    <div>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</div>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="{`weather.weather[0].description`}" />
                    <div>Wind: {weather.wind.speed} m/s</div>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    )
}

export default CountryDetailsWeather
