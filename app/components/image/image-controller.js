import ImageService from "./image-service.js";

//Your ImageService is a global class what can you do here to instantiate it?

let _imageService = new ImageService()

function _drawImg(imgUrl) {
  document.getElementById('body').style.backgroundImage = `url(${imgUrl})`;
}



// public
export default class ImageController {
  constructor() {
    _imageService.getImage(_drawImg)
  }




}

