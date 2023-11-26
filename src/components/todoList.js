const todoList = (todo_list_container, todos) => {
    todo_list_container.innerText = '';

    if (!todos.length) {
        const empty_message = todo_list_container.getAttribute('data-empty-message');
        todo_list_container.innerHTML = `<div class="empty-list">${empty_message ? empty_message : ''}</div>`;
        return;
    }

    return todos.map((todo) => {
        let todo_item = `<div class="${todo.completed ? 'todo-block todo-block--completed' : 'todo-block'}" data-id="${todo.id}">
            <div class="todo-block__text">
                <span>${todo.text}</span>
                <span class="todo-block__time">${new Date(todo.id).toLocaleTimeString()}</span>
            </div>
            <div class="todo-block__btns">
                <button class="todo-block__btn-toggle btn-ico${todo.completed ? ' done' : ''}">${todo.completed ? '&#10008;' : '&#10004;'}</button>
                <button class="todo-block__btn btn-ico">&#10006;</button>
            </div>
        </div>`;

        todo_list_container.innerHTML += todo_item;
    });
}

export default todoList;