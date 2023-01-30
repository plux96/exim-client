const reducer = (state, action) => {
    switch (action.type) {
        case "DRAWER_OPEN_MINI": return openMiniDrawer(state, action);
        case "DRAWER_OPEN_FULL": return openFullDrawer(state, action);
        case "DRAWER_RESET": return resetDrawerConfigs(state);
        case "OPEN_FORMS": return {...state, forms: true };
        default: return state;
    }
}

export default reducer;

const openMiniDrawer = (state, action) => {
    return {
        ...state,
        drawer: {
            open: true,
            fullWidth: false,
            content: action.content
        }
    }
}

const openFullDrawer = (state, action) => {
    return {
        ...state,
        drawer: {
            open: true,
            fullWidth: true,
            content: action.content
        }
    }
}

const resetDrawerConfigs = (state) => {
    return {
        ...state,
        drawer: {
            open: false,
            fullWidth: false,
            content: null
        },
        forms: false
    }
}