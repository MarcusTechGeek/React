function WeatherInfo({ weatherData, cityName }) {
    return (
        <>
            {/* Weather information card */}
            <div className="weather-info text-center card bg-light">

                {/* Display city name */}
                <h3>{cityName}</h3>
                {/* Display weather icon */}
                <i className="bi bi-cloud-haze text-center display-2 text-warning"></i>
                {/* Conditional rendering based on availability of weather data */}
                {
                    typeof weatherData.main == "undefined" ? (
                        // Display message if no weather data found
                        <p>No data found</p>
                    ) : (
                        // Display weather details if data is available
                        <>
                            {/* Display current temperature */}
                            <h3>{weatherData.main.temp}<sup>o</sup> Cel</h3>
                            <hr />
                            {/* Display max temperature, min temperature, and humidity */}
                            <div className="row">
                                <div className="col-sm-4">{weatherData.main.temp_max}<sup>o</sup> Cel<br /><b>Max Temp</b></div>
                                <div className="col-sm-4">{weatherData.main.temp_min}<sup>o</sup> Cel<br /><b>Min Temp</b></div>
                                <div className="col-sm-4">{weatherData.main.humidity}%<br /><b>Humidity</b></div>
                            </div>
                        </>
                    )
                }

            </div>
        </>
    );
}

export default WeatherInfo;
