import QuoteService from "../services/quote-service.js";

let _qs = new QuoteService()

function _drawQuote() {
  console.log("drawing the quote", _qs.Quote);
  let dayQuote = _qs.Quote
  let template = `<p>${dayQuote.quote}</p>
  <p>${dayQuote.author}</p>`
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
