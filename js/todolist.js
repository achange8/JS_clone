const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDolist = document.querySelector(".todo-list");

function paintToDo (newTodo){ 
 const li = document.createElement("li");
 const span = document.createElement("span");
 li.appendChild(span);
 span.innerText = newTodo;3.
 toDolist.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit)