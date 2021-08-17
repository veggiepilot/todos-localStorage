// select DOM elements
var newTodoForm  = document.getElementById('new-todo-form');
var newTodoInput = document.getElementById('new-todo');
var todoList     = document.getElementById('todos-list');

var todos = ["test", "test3333", "test3333walk the dog"];

// loop through todos

for (var i = 0; i < todos.length; i++) {
    // create an LI 
    var li = document.createElement("li");
    // insert text in LI
    li.innerText = todos[i];
    // append element into todoList
    todoList.appendChild(li);
    
}



function addTodo(event) {
    event.preventDefault();
    var newTodoText = newTodoInput.value;
    todos.push(newTodoText);
    newTodoInput.value = '';
    console.log(todos);

}
newTodoForm.addEventListener('submit', addTodo);