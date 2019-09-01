import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import QuoteController from "./controllers/quote-controller.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      quoteController: new QuoteController(),
      todoController: new TodoController()
    }
  }
}

window['app'] = new App()  