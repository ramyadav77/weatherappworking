const apiKey = `6d0e8837aa7922da6bb275232f024efd`

; // Replace with your actual API key
const fetchWeather = document.getElementById('fetchWeather');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

fetchWeather.addEventListener('click', () => {
    const cityName = cityInput.value;

    if (cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
                const description = data.weather[0].description;

                weatherInfo.innerHTML = `Current Weather in ${cityName}: ${temperature}°C, ${description}`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.innerHTML = 'Error fetching weather data. Please try again later.';
            });
    } else {
        weatherInfo.innerHTML = 'Please enter a city name.';
    }
});