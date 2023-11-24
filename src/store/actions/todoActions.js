export const ADD_TODO = 'ADD_TODO';

const addTodo = (text_todo) => {
    return {
        type: ADD_TODO,
        payload: text_todo,
    }
}

export default addTodo;