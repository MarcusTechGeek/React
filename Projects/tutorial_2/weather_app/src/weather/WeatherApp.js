import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

function WeatherApp() {
    // State for storing the city name entered by the user
    const [cityName, setCityName] = useState("");
    // State for storing the weather data fetched from the API
    const [weatherData, setWeatherData] = useState({});

    // Function to handle change in the city name input field
    const changeCityInput = (e) => {
        setCityName(e.target.value);
    };

    // Function to fetch weather data from the API
    const fetchWeatherAPI = async () => {
        // API key for accessing OpenWeatherMap API
        const APIKey = "e7be7572b9f4496b706da89d51eb477d"; 
        // API endpoint for fetching weather data based on the city name
        const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`;
        try {
            // Fetching weather data from the API
            const resp = await fetch(APIurl);
            // Converting response to JSON format
            const respJson = await resp.json();
            // Updating weather data state with fetched data
            setWeatherData(respJson);
        } catch (error) {
            // Handling errors if any occur during API fetch
            console.error("Error fetching weather data:", error);
        }
    };

    // Function to handle search button click
    const handleSearch = () => {
        // Check if the city name is not empty
        if (cityName.trim() !== "") {
            // Call function to fetch weather data
            fetchWeatherAPI();
        }
    };

    return (
        <>
            {/* Container for the weather app */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        {/* Heading for the weather app */}
                        <h3 className="text-center text-success">React Weather App</h3>
                        {/* Form group for entering city name and search button */}
                        <div className="form-group">
                            {/* Input field for entering city name */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter City Name"
                                onChange={changeCityInput} // Handling change in input value
                                value={cityName} // Setting value of input field
                            />
                            {/* Button for triggering weather data fetch */}
                            <button className="btn btn-primary mt-2" onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                        {/* Component to display weather information */}
                        <WeatherInfo cityName={cityName} weatherData={weatherData} />
                        {/* Component to display weather information */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherApp;
