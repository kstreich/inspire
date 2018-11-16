import WeatherService from "./weather-service.js";

let _weatherService = new WeatherService()

function _drawWeather(weatherData) {
	document.getElementById("weather").innerHTML =
		`
		<div class= "card">
			<div class= "card-body>
				<h5 class="card-title">${weatherData.name}</h5>
				<h5>${weatherData.temp}</h5>
				<p class="card-text">High:${weatherData.tempHigh} - Low:${weatherData.tempLow}</p>
			</div>
		</div>
		`
}


// public
export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		_weatherService.getWeather(_drawWeather)
	}
}
