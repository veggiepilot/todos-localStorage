// select DOM elements
var newTodoForm  = document.getElementById('new-todo-form');
var newTodoInput = document.getElementById('new-todo');
var todoList     = document.getElementById('todos-list');

var todos = ["test", "test3333", "test3333walk the dog"];

function addTodo(event) {
    event.preventDefault();
    var newTodoText = newTodoInput.value;
    todos.push(newTodoText);
    newTodoInput.value = '';
    console.log(todos);

}
newTodoForm.addEventListener('submit', addTodo);