import QuoteService from "../services/quote-service.js";

let _qs = new QuoteService()

function _drawQuote() {
  let dayQuote = _qs.Quote
  let template = `<div class="quote-display px-2"> 
  <h5>${dayQuote.quote}</h5>
  <p> - ${dayQuote.author}</p>
  </div>`
  document.getElementById('quote').innerHTML = template
}


//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', _drawQuote)
    _qs.getQuote()
  }
}
