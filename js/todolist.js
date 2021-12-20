const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDolist = document.querySelector(".todo-list");
const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteToDo(event) {
    const list = event.target.parentElement;
    list.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
    saveToDos();
  }

function paintToDo (newTodo){ 
 const li = document.createElement("li");
 li.id = newTodo.id
 const span = document.createElement("span");
 span.innerText = newTodo.text;
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
    const newTodoobj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoobj);
    paintToDo(newTodoobj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


