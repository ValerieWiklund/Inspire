export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.temp = data.main.temp
    this.description = data.weather[0].main
  }


  get Template() {
    return ` <div class="card">
  <div class="card-body">
    ${this.temp}
    ${this.city}
  </div>
  </div>`
  }
}