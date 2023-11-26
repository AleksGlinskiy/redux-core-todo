import {ACTIVE_FORM_BTN} from "../actions/formActions";

const formReducer = (state = false, action) => {
    switch (action.type) {
        case ACTIVE_FORM_BTN: {
            return action.payload;
        }

        default:
            return state;
    }
}

export default formReducer;