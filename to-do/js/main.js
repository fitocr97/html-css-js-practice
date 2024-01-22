let todos = []; //almacebar datis en la lista

window.onload = () =>{
    let form = document.getElementById('todo-form')

    form.onsubmit = (e) =>{
        e.preventDefault();//no refrescar pagina algo que hacen los form
        let todo = document.getElementById('todo')
        let todoText = todo.value;
        todo.value = '';
        todos.push(todoText)

        let todoList = document.getElementById('todo-list')

        todoList.innerHTML += '<li>' + todoText + '</li>'
    }
}

