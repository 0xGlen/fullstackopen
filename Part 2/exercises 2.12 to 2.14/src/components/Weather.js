const Weather = ({countryToDisplay, countryWeather}) => {

    const toCelsius = (temp) => {
        return Math.round((temp - 273.15)*10/10)
    }

return (
    <div>
        <h3>
            Weather in {countryToDisplay.capital[0]}
        </h3>
        <p>Temperature {toCelsius(countryWeather.main.temp)}ºC</p>
        <img src={`https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}.png`} />
        <p>wind {countryWeather.wind.speed} m/s</p>
    </div>
)
}

export default Weather