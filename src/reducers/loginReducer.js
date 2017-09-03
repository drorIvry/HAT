/**
 * Reducer for login
 */
const initState = {
    logged: false,
    server:''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":{
            return {...state, logged:true};
        }
        case "LOGOUT":{
            return {...state, logged:false};
        }
        default:
            return state
    }
}

export default reducer
