import QuoteService from "./quote-service.js";

let _qs = new QuoteService

function _drawQuote(quoteBody, quoteAuthor) {
	document.getElementById("quote").innerHTML = `
		<div class= "jumbotron">
			<div class="row"> 	
				<h3>${quoteBody}</h3>
				<p>${quoteAuthor}</p>
			</div>
		</div>
	`
}


// public
export default class QuoteController {
	constructor() {
		_qs.getQuote(_drawQuote)
	}


}
