
/**
 * Reducer for bucket navigation
 */
const initState = {
   filters:[]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "FILTER":
            return {...state, filters:action.payload};
        case "CLEAR_FILTERS":
            return {...state, ...initState};
        default:
            return state;
    }
}

export default reducer;
