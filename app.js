//* ================================================ */
//*                 TODO APP
//* ================================================ */

//? Selectors
const addBtn = document.getElementById("todo-button")
const todoInput = document.getElementById("todo-input")
const todoUl = document.getElementById("todo-ul")

let todos = JSON.parse(localStorage.getItem("TODOS")) || []
console.log(todos);

const renderSavedTodos = () =>{
todos.forEach ((todo) =>{
    createListElement(todo)
})
}

renderSavedTodos()

addBtn.addEventListener("click", () => {
    if(todoInput.value.trim() === ""){
        alert("Please enter new todo")
    }else {
    const newTodo = {
        id: new Date().getTime(),
        completed:false,
        text:todoInput.value,
    }

    //! Yeni bir li elementi oluşturup bunu DOM a bas
    createListElement(newTodo)

    //? Yeni oluşturulan todo' yu diziye sakla
    todos.push(newTodo)


    localStorage.setItem("TODOS", JSON.stringify(todos))
    console.log(todos);
    todoInput.value = ""
    }
})

    function createListElement(newTodo) {
        const {id, completed, text} = newTodo //! Destr.
         //? yeni bir li elementi olustur ve bu elemente obje icerisindeki
        //? id degerini ve completed class'ini ata
        const li = document.createElement("li")
        /* li.id = newTodo.id */
        li.setAttribute("id", id)

       /*  newTodo.completed ? li.classList.add("completed") : "" */
      completed && li.classList.add("checked")
       
        //? okey ikonu olustur ve li elementine bagla
        const okIcon = document.createElement("i")
        okIcon.setAttribute("class", "fas fa-check")
        li.appendChild(okIcon)

        //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
        const p = document.createElement("p");
        const pTextNode = document.createTextNode(newTodo.text);
        p.appendChild(pTextNode)
        li.appendChild(p)

        //? delete ikonu olustur ve li elementine bagla
        const deleteIcon = document.createElement("i")
        deleteIcon.setAttribute("class", "fas fa-trash")
        li.appendChild(deleteIcon)
        console.log(li);
        //? meydana gelen li elementini ulye child olarak ata
        todoUl.appendChild(li)
    }

    //! UI selementinin cocuklarından herhangi birisinden bir event gelirse bunu tespit et ve gerekeni yap (Capturing)
    todoUl.addEventListener('click', (e) =>{
        console.log(e.target);

        const id = e.target.parentElement.getAttribute("id")
        //! event bir delete butonundan geldi ise
        if(e.target.classList.contains("fa-trash")){
            //? delete butonunun parentini DOM dan sil 
           e.target.parentElement.remove()

        todos = todos.filter((todo) => todo.id !== id )
        }else if(e.target.classList.contains("fa-check")){
            //! event bir okey butonundan geldi ise
            //? ilgili li elementinde checked adında bir classı varsa bunusil aksi takdirde ekle(DOM)
           e.target.parentElement.classList.toggle("checked")
        }
    })

    //? Enter tusu ile ekleme mümkün olsun
    todoInput.addEventListener("keydown", (e) => {
        if (e.code === "Enter"){
            addBtn.click()
        }
    })

    //? Baslangıcta input aktif olsun
    window.onload = function () {
        todoInput.focus()
    }