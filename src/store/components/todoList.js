const todoList = (todo_list_container, todos) => {
    todo_list_container.innerText = '';

    console.log(todos);

    if (!todos.length) {
        const empty_message = todo_list_container.getAttribute('data-empty-message');
        todo_list_container.innerText = empty_message ? empty_message : '';
        return;
    }

    return todos.map((todo) => {
        const todo_item = document.createElement("div");
        const todo_item_btn = document.createElement("button");
        todo_item_btn.classList.add('todo-block__btn');

        todo_item.classList.add('todo-block');
        if (todo.completed) {
            todo_item.classList.add('todo-block--completed');
        }

        todo_item.setAttribute('data-id', todo.id);
        todo_item.textContent = todo.text;
        todo_item_btn.textContent = 'X';

        todo_item.appendChild(todo_item_btn);
        todo_list_container.appendChild(todo_item);
    });
}

export default todoList;