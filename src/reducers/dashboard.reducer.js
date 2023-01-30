const reducer = (state, action) => {
    switch (action.type) {
        case "OPEN_FULL_MODAL": return openFullModal(state, action);
        case "RESET_MODAL": return resetFullModal(state);
        default: return state;
    }
}

export default reducer;

const openFullModal = (state, action) => {
    return {
        ...state,
        modal: {
            open: true,
            index: action.index
        }
    }
}

const resetFullModal = (state) => {
    return {
        ...state,
        modal: {
            open: false,
            index: false
        }
    }
}