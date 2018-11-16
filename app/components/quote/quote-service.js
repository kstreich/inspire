let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'https://favqs.com/api/qotd';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


// @ts-ignore
const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


function _handleError(err) {
	throw new Error(err)
}

export default class QuoteService {

	getQuote(callWhenDone) {
		console.log('looking for some good quotes')

		quoteApi.get().then(res => {
			let quoteBody = res.data.quote.body
			let quoteAuthor = res.data.quote.author
			callWhenDone(quoteBody, quoteAuthor)
		})
			.catch(_handleError)
	}

}
