const initState = {
    snackOpened: false,
    snackMessage: ''
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "TOGGLE_SNACK": {
            return {...state, snackOpened: !state.snackOpened,snackMessage: action.payload};
        }
        default:
            return state
    }
};

export default reducer;