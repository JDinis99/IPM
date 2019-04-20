const weather_vals = [
    {
        icon: "clear-day",
        temp: 26
    },
    {
        icon: "clear-night",
        temp: 21
    },
    {
        icon: "partly-cloudy-day",
        temp: 20
    },
    {
        icon: "partly-cloudy-night",
        temp: 17
    },
    {
        icon: "cloudy",
        temp: 15
    },
    {
        icon: "rain",
        temp: 13
    },
    {
        icon: "sleet",
        temp: 14
    },
    {
        icon: "snow",
        temp: 2
    },
    {
        icon: "wind",
        temp: 7
    },
    {
        icon: "fog",
        temp: 12
    }
]

let i = Math.floor(Math.random() * weather_vals.length)

let skycons = new Skycons({"color": "#271f30"});
skycons.add("weather-icon", weather_vals[i].icon);
skycons.play();

let temp = document.getElementById('weather-temp')
temp.innerHTML = weather_vals[i].temp
