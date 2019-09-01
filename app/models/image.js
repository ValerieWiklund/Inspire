export default class Image {
  constructor(data) {
    console.log('Raw image data', data)
    this.image = data.large_url
  }
}