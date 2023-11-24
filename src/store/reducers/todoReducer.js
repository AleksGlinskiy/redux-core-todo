import {ADD_TODO, REMOVE_TODO} from "../actions/todoActions";

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false,
                    },
                ],
            });
        }

        case REMOVE_TODO: {
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                    return todo.id !== Number(action.payload);
                })
            });
        }

        default:
            return state;
    }
}

export default todoReducer;