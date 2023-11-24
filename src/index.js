import { createStore } from 'redux';
import todoReducer from "./store/reducers/todoReducer";
import { addTodo, removeTodo } from "./store/actions/todoActions";
import todoList from "./components/todoList";
import './index.scss';

const store = createStore(todoReducer);

const todo_form = document.getElementById('js_todo_form');
const todo_form_input = todo_form.querySelector('[name="todo_text"]');
const todo_list_container = document.getElementById('js_todo_list');

store.subscribe(() => {
    const state = store.getState();

    //console.log(state);

    todo_form_input.value = '';
    todoList(todo_list_container, state.todos);
});

todo_form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(todo_form_input.value !== '') {
        store.dispatch(addTodo(todo_form_input.value));
    }
});

document.addEventListener('click', (event) => {
    const event_remove_todo = event.target.closest('.todo-block__btn');

    if(event_remove_todo) {
        const todo_item = event_remove_todo.closest('.todo-block');
        const todo_item_id = todo_item.getAttribute('data-id');

        if (todo_item_id) {
            store.dispatch(removeTodo(todo_item_id));
        }
    }
});