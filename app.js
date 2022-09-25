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
    }
    
})
