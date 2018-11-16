
export default class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = Math.round((data.main.temp - 273.15) * 9 / 5 + 32)
    this.tempHigh = Math.round((data.main.temp_max - 273.15) * 9 / 5 + 32)
    this.tempLow = Math.round((data.main.temp_min - 273.15) * 9 / 5 + 32)
    this.description = data.weather[0].description
    this.icon = data.weather[0].id
  }
}