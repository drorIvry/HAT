/**
 * Reducer for login
 */
const initState = {
    user:"please login"
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":{
            return {...state, logged:action.payload.user};
        }
        case "LOGOUT":{
            return {...state, logged:false};
        }
        default:
            return state
    }
}

export default reducer;
