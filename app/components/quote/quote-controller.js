import QuoteService from "./quote-service.js";

let _qs = new QuoteService

function _drawQuote() {

}





export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		_qs.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
