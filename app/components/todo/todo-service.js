import ToDo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/kim/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = [] //my list array

export default class TodoService {

	get todoList() {
		return todoList
	}

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				todoList = res.data.data
				draw(todoList)
			})
			.catch(logError)
	}

	addTodo(formData, getTodos) {
		// WHAT IS THIS FOR???
		todoApi.post('', formData)
			.then((res) => { // <-- WHAT DO YOU DO AFTER CREATING
				getTodos()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = todoList.find(t => t._id == todoId)
		todo.completed = !todo.completed
		//STEP 2: Change the completed flag to the opposite of what it is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				getTodos()
			})
			.catch(logError)
	}

	removeTodo(todoId, getTodos) {
		// Umm this one is on you to write.... The method is a DELETE
		// let todo = todoList.find(t => t._id == todoId)
		// if you want to delete a todo ONLY when it has been completed, use if statment to check if todo is not completed => if not, pop up modal or other notification that will prevent delete request and allow it only when it HAS BEEN completed.

		todoApi.delete(todoId)
			.then(res => {
				getTodos()
			})
	}

}