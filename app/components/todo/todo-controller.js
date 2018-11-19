import TodoService from "./todo-service.js";

var todoService = new TodoService()

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todoList) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	//DONT FORGET TO LOOP
	console.log("show the list:", todoList)
	// let list = todoService.todoList
	let template = ""
	todoList.forEach(element => {
		// console.log(element)
		template += `
		<div class="form-check">
			<label class="form-check-label"></label>
			<input class="form-check-input" type="checkbox" ${element.completed ? "checked" : ""} onchange="app.controllers.todoController.toggleTodoStatus('${element._id}')" value="checked" /> 
			<h5>${element.description}</h5>
			<button onclick="app.controllers.todoController.removeTodo('${element._id}')"><i class="far fa-trash-alt"></i></button>
		</div>
    `
	})
	document.getElementById("todo").innerHTML = template
}
// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
	}
	addTodoFromForm(event) {
		// addTodo takes in a todo and posts it to the server
		event.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		let description = event.target.todo //grabs the event data from the form
		var formData = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: description.value
		}
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(formData, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}
	toggleTodoStatus(todoId) {
		// console.log(todoId)
		// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}
	removeTodo(todoId) {
		// removeTodo takes in a todoId and sends a delete request to the server
		// ask the service to run the remove todo with this id
		console.log(todoId)
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus

	}

}