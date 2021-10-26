'use strict'

let weather = {
    apiKey: "4229c0e1c7395dc5e991adfd679ca372",
    fetchWeather: function () {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=Louisville&units=imperial&APPID=4229c0e1c7395dc5e991adfd679ca372",
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
};
