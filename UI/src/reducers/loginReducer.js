import React from 'react';

/**
 * Reducer for login
 */
const initState = {
    user: "please login",
    logged: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_FULFILLED": {
            return {...state, user: action.payload.data, logged: true, error:undefined};
        }

        case "LOGIN_REJECTED": {
            return {...state, error:<span>User Name or password are incorrect!</span>}
        }

        case "LOGOUT": {
            return {...state, ...initState};
        }
        default:
            return state
    }
}

export default reducer;
