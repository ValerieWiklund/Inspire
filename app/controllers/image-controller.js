import ImageService from "../services/image-service.js";

const _is = new ImageService()

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
function _drawImage() {
  let useImage = _is.Image.image
  let template = `
       url("${useImage}")
  `
  document.getElementById('bg-image').style.backgroundImage = template;
}


export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImage)
    _is.getImage()
  }

}

