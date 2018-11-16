
const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const apiUrl = url + encodeURIComponent(url2);


// @ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(_drawImg) {
		// ^^^^^^^ How do you call this function?
		let randomNum = Math.floor((Math.random() * 40) + 1)


		imgApi.get().then(res => {
			let imgUrl = res.data.images[randomNum].url;
			_drawImg(imgUrl)
		})

	}


}
