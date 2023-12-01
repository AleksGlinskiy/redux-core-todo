import { createStore } from 'redux';
import rootReducer from "./store/reducers/rootReducer";
import {addTodo, removeTodo, toggleTodo} from "./store/actions/todoActions";
import todoList from "./components/todoList";
import {activeFormBtn} from "./store/actions/formActions";
import {setDisabled} from "./helpers";

import './index.scss';

const store = createStore(rootReducer);

const todo_form = document.getElementById('js_todo_form');
const form_button = todo_form.querySelector('button');
const todo_form_input = todo_form.querySelector('[name="todo_text"]');
const todo_list_container = document.getElementById('js_todo_list');

store.subscribe(() => {
    const state = store.getState();

    setDisabled(state.active_form_btn, form_button);
    todoList(todo_list_container, state.todos);
});

todo_form_input.addEventListener('input', function (event) {
    let text = this.value;
    if(text !== '') {
        store.dispatch(activeFormBtn(true));
    } else {
        store.dispatch(activeFormBtn(false));
    }

    this.value = text;
});

todo_form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(todo_form_input.value !== '') {
        store.dispatch(addTodo(todo_form_input.value));
        store.dispatch(activeFormBtn(false));
        todo_form_input.value = '';
    }
});

document.addEventListener('click', (event) => {
    const event_remove_todo = event.target.closest('.todo-block__btn');
    const event_toggle_todo = event.target.closest('.todo-block__btn-toggle');

    if(event_remove_todo) {
        const todo_item = event_remove_todo.closest('.todo-block');
        const todo_item_id = todo_item.getAttribute('data-id');

        if (todo_item_id) {
            store.dispatch(removeTodo(todo_item_id));
        }
    }

    if(event_toggle_todo) {
        const _todo_item = event_toggle_todo.closest('.todo-block');
        const _todo_item_id = _todo_item.getAttribute('data-id');

        if (_todo_item_id) {
            store.dispatch(toggleTodo(_todo_item_id));
        }
    }
});