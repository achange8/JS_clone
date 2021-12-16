const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDolist = document.querySelector(".todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}


function deleteToDo(event) {
    const list = event.target.parentElement;
    list.remove();
  }

function paintToDo (newTodo){ 
 const li = document.createElement("li");
 const span = document.createElement("span");
 span.innerText = newTodo;
 const button = document.createElement("button");
 button.innerText = "X";
 button.addEventListener("click",deleteToDo);
 li.appendChild(span);
 li.appendChild(button);
 toDolist.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}



toDoForm.addEventListener("submit",handleToDoSubmit)