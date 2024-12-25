const searchInput = document.querySelector(".search-input")
const locationButton = document.querySelector(".location-button")
const currentWeatherDiv = document.querySelector(".current-weather")
const hourlyWeatherDiv = document.querySelector(".hourly-weather .weather-list")

const API_KEY = "61a1a1259ee1444da1a202348242412"

// weather codes for mapping to custom icons
const weatherCodes = {
    clear: [1000],
    clouds: [1003, 1006, 1009],
    mist: [1030, 1135, 1147],
    rain: [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246, 1273, 1276],
    moderate_heavy_rain: [1186, 1189, 1192, 1195, 1243, 1246],
    snow: [1166, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252,
        1255, 1258, 1261, 1279, 1282],
    thunder: [1087, 1279, 1282],
    thunder_rain: [1273, 1276],
}

const displayHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0)
    const next24Hours = currentHour + 24 * 60 * 60 * 1000

    // filter the hourly data to only include the next 24 hour
    const next24HoursData = hourlyData.filter(({time}) => {
        const forecastTime = new Date(time).getTime()
        return forecastTime >= currentHour && forecastTime <= next24Hours
    })

    // generate html for each hourly forecast anddisplay it
     hourlyWeatherDiv.innerHTML = next24HoursData.map(item => {
        const tempreture = Math.floor(item.temp_c)
        const time = item.time.split(" ")[1].substing[0, 5]
        const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(item.
            condition.code))
        
            return `<li class="weather-item">
                        <p class="time">${time}</p>
                        <img src="../weather-app/images/${weatherIcon}.webp" class="weather-icon">
                        <p class="tempreture">${tempreture}°</p>
                    </li>`
    }).join("")
}

const getWeatherDetails = async (API_URL) => {
    window.innerWidth <= 768 && searchInput.blur()
    document.body.classList.remove("show-no-result")
    try {
        // fetch weather data from the api and parse the response as json
        const response = await fetch(API_URL)
        const data = await response.json()

        // extract current weather details
        
    

        currentWeatherDiv.querySelector(".weather-icon").src = `../weather-app/images/${weatherIcon}.webp`;
        currentWeatherDiv.querySelector(".tempreture").innerHTML = `${tempreture}<span>°C</span>`
        currentWeatherDiv.querySelector(".description").innerHTML = description
        
        // combine hourly data from today and tomorrow
        const combinedHourlyData = [...data.forecast.forecastday[0].hour, 
        ...data.forecast.forecastday[1].hour]
        displayHourlyForecast(combinedHourlyData)

        searchInput.value = data.location.name
    } catch (error) {
        document.body.classList.add("show-no-result")
    }
}

// set up the weather request for a specific city
const setupWeatherRequest = (cityName) => {
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=2`
        getWeatherDetails(API_URL)
}

// handle user input in the search box
searchInput.addEventListener("keyup", (e) => {
    const cityName = searchInput.value.trim()

    if(e.key === "Enter" && cityName) {
        setupWeatherRequest(cityName)
    }
})

// get users location
locationButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`
        getWeatherDetails(API_URL)
    }, error=> {
        alert("location access denied. please enable permission to use this feature")
    })
})

// initial weather request for arad as the defult city

setupWeatherRequest("Arad")