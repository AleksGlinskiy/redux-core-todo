const setDisabled = (bool, el) => {
    return bool ? el.removeAttribute('disabled') : el.setAttribute('disabled', '');
}

export {
    setDisabled,
}