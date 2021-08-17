// select DOM elements
var newTodoForm  = document.getElementById('new-todo-form');
var newTodoInput = document.getElementById('new-todo');
var todoList     = document.getElementById('todos-list');

var todos = [];

function renderTodos() {
    // clear out list in DOM
    todoList.innerHTML = '';
    // loop through todos
    for (var i = 0; i < todos.length; i++) {
        // create an LI 
        var li = document.createElement("li");
        // insert text in LI
        li.innerText = todos[i];
        // append element into todoList
        todoList.appendChild(li);   
    }
}

function addTodo(event) {
    event.preventDefault();
    var newTodoText = newTodoInput.value;
    todos.push(newTodoText);
    newTodoInput.value = '';
    renderTodos();

}
newTodoForm.addEventListener('submit', addTodo);
renderTodos();