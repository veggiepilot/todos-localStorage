

// select DOM elements
var newTodoForm  = document.getElementById('new-todo-form');
var newTodoInput = document.getElementById('new-todo');
var todoList     = document.getElementById('todos-list');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    // clear out list in DOM
    todoList.innerHTML = '';
    // loop through todos
    for (var i = 0; i < todos.length; i++) {
        // create an LI 
        var li = document.createElement("li");
        // add data-id attribute to li
        li.setAttribute('data-index', i);
        // insert text in LI
        li.innerText = todos[i];
        // create button el
        var button = document.createElement('button');
        // add checkamark &#10004 to button
        button.innerHTML = '&#10004;'
        // append button into li 
        li.appendChild(button);

        // append element into todoList
        todoList.appendChild(li);   
    }
}

function addTodo(event) {
    event.preventDefault();
    var newTodoText = newTodoInput.value;
    todos.push(newTodoText);
    localStorage.setItem('todos', JSON.stringify(todos));
    newTodoInput.value = '';
    renderTodos();

}

function removeTodo(event) {
    if ( event.target.tagName === "BUTTON") {
        var idx = event.target.parentElement.getAttribute('data-index')
        //remove element
        todos.splice(idx, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        // re-render our todos list
        renderTodos();
    }
}


newTodoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', removeTodo)
renderTodos();