//* ================================================ */
//*                 TODO APP
//* ================================================ */

//? Selectors
const addBtn = document.getElementById("todo-button")
const todoInput = document.getElementById("todo-input")
const todoUl = document.getElementById("todo-ul")

addBtn.addEventListener("click", () => {
    if(todoInput.value.trim() === ""){
        alert("Please enter new todo")
    }else {
    const newTodo = {
        id: new Date().getTime(),
        completed:false,
        text:todoInput.value,
    }
    createListElement(newTodo)
    }
})

    const createListElement = (newTodo) => {
        const li = document.createElement("li")
        /* li.id = newTodo.id */
        li.setAttribute("id", newTodo.id)
        console.log(li);
    }
