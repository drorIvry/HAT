/**
 * Reducer for bucket navigation
 */
const initState = {
    filters: [],
    activities: [],
    drawerOpen:false,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "TOGGLE_DRAWER":
            return {...state, drawerOpen:!state.drawerOpen};

        case "FILTER":
            return {...state, filters: action.payload};

        case "CLEAR_FILTERS":
            return {...state, ...initState};

        case "POUR_FULFILLED":
            return {...state, activities: action.payload.data};
        case "POUR_REJECTED":
            console.error(action.payload, action.payload.error);
            return {...state};

        case "GET_FILTERED_FULFILLED":
            return {...state, activities: action.payload.data};
        case "GET_FILTERED_REJECTED":
            console.error(action.payload, action.payload.error);
            return {...state};

        default:
            return state;
    }
};

export default reducer;
