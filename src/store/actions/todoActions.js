export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = (text_todo) => {
    return {
        type: ADD_TODO,
        payload: text_todo,
    }
}

const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id,
    }
}

export {addTodo, removeTodo};