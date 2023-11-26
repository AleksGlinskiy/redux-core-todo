export const ACTIVE_FORM_BTN = 'ACTIVE_FORM_BTN';

const activeFormBtn = (status) => {
    return {
        type: ACTIVE_FORM_BTN,
        payload: status,
    }
}
export {activeFormBtn};