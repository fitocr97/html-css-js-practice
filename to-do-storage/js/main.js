let todos = JSON.parse(localStorage.getItem('todos')) || []

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
            const todoStrings = JSON.stringify(todos) //transforma a string
            localStorage.setItem('todos', todoStrings)
            render()
        })
    })
}


window.onload = () =>{
    render()
    let form = document.getElementById('todo-form')

    form.onsubmit = (e) =>{
        e.preventDefault();//no refrescar pagina algo que hacen los form
        let todo = document.getElementById('todo')
        let todoText = todo.value;
        todo.value = '';
        todos.push(todoText)            
        const todoStrings = JSON.stringify(todos) //transforma a string
        localStorage.setItem('todos', todoStrings)
        render()
    }
}

