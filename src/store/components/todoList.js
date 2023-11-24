const todoList = (todo_list_container, todos) => {
    todo_list_container.innerText = '';

    return todos.map((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        todo_list_container.appendChild(li);
    })
}

export default todoList;