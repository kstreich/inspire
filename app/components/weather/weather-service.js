import Weather from "../../models/weather.js";

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let _weather = {}


function _handleError(err) {
	throw new Error(err)
}

// public
export default class WeatherService {

	getWeather(callWhenDone) {
		console.log('Calling the Weatherman')
		weatherApi.get().then(res => {
			_weather = new Weather(res.data)
			// localStorage.setItem('weather', JSON.stringify(res.data))
			callWhenDone(_weather);
		})
			.catch(_handleError)
	}
}
