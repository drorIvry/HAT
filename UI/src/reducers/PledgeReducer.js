import React from 'react';

/**
 * Reducer for PLEDGE
 */
const initState = {
    error:undefined,
    pledged: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "PLEDGE_FULFILLED": {
            return {...state, user: action.payload.data, pledged: true, error:undefined};
        }

        case "PLEDGE_REJECTED": {
            return {...state, error:<span>Server Error</span>}
        }
        default:
            return state
    }
}

export default reducer;
