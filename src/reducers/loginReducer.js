/**
 * Reducer for login
 */
const initState = {
    user:"please login",
    logged:false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":{
            return {...state, user:action.payload.user, logged:true};
        }
        case "LOGOUT":{
            return {...state, logged:false};
        }
        default:
            return state
    }
}

export default reducer;
