import { ADD_TODO } from "../actions/todoActions";

const initialState = {
  todos: []
};

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.payload,
                        completed: false,
                    },
                ],
            });
        }
        default:
            return state;
    }
}

export default todoReducers;