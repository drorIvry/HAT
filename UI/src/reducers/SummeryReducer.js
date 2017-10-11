import React from 'react';

/**
 * TODO REDO  with server (state as [])
 */
const initState = {
    motions:[]
};

const reducer = (state = initState, action) => {
    switch (action.type) {

        case "GET_MOTIONS_FULFILLED":
            return ({...state, motions:action.payload.data});

        case "GET_MOTIONS_REJECTED":
            return ({...state, error:action.payload.data});



        default:
            return state
    }
}

export default reducer;
