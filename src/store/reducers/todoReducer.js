import {ADD_TODO, REMOVE_TODO} from "../actions/todoActions";

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