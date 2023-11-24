import { createStore } from 'redux';
import todoReducers from "./store/reducers/todoReducers";
import addTodo from "./store/actions/todoActions";
import todoList from "./store/components/todoList";

const store = createStore(todoReducers);

const todo_form = document.getElementById('js_todo_form');
const todo_form_input = todo_form.querySelector('[name="todo_text"]');
const todo_list_container = document.getElementById('js_todo_list');

store.subscribe(() => {
    const state = store.getState();

    todo_form_input.value = '';
    todoList(todo_list_container, state.todos);
});

todo_form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(todo_form_input.value !== '') {
        store.dispatch(addTodo(todo_form_input.value));
    }
});