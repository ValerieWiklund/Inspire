export default class Quote {
  constructor(data) {
    console.log('Raw quote data', data)
    this.quote = data.quote.body
    this.author = data.quote.author
  }
}