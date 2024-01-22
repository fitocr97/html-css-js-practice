let todos = []; //almacebar datis en la lista

const render = () =>{
    let todoList = document.getElementById('todo-list')
        
    let todosTemplate = todos.map(t => '<li>' + t +'</li>')
    todoList.innerHTML = todosTemplate.join('')
    console.log(todosTemplate)

    const elementos = document.querySelectorAll('#todo-list li')
    /*elementos.forEach(x => console.log(x))*/
    elementos.forEach((elemento, i) =>{
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            render()
        })
    })
}


window.onload = () =>{
    let form = document.getElementById('todo-form')

    form.onsubmit = (e) =>{
        e.preventDefault();//no refrescar pagina algo que hacen los form
        let todo = document.getElementById('todo')
        let todoText = todo.value;
        todo.value = '';
        todos.push(todoText)            
        render()
    }
}

