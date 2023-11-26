import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "../actions/todoActions";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false,
                },
            ];
        }

        case TOGGLE_TODO: {
            return state.map((todo) => {
                if (todo.id === Number(action.payload)) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed,
                    });
                }
                return todo;
            });
        }

        case REMOVE_TODO: {
            return state.filter((todo) => {
                return todo.id !== Number(action.payload);
            });
        }

        default:
            return state;
    }
}

export default todoReducer;