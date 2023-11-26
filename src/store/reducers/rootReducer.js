import { combineReducers } from 'redux';
import todoReducer from "./todoReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
    active_form_btn: formReducer,
    todos: todoReducer
});

export default rootReducer;