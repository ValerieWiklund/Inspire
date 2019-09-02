import WeatherService from "../services/weather-service.js";

var _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	let conditions = _weatherService.Weather
	let fTemp = Math.round(((conditions.temp - 273) * 1.8) + 32)
	let template = ` <div class="weather-display pt-4 pb-1 px-5">
   <h4>${fTemp} &#8457</h4>
  <p> ${conditions.city} </p>
    </div>`
	document.getElementById('weather').innerHTML = template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}
}


