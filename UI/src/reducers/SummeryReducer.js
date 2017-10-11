import React from 'react';

/**
 * TODO REDO  with server (state as [])
 */
const initState = {
    motions:[
    {title:'Budget', subtitle:'daily budget', value:'TBD', pledged:[]},
    {title:'Dates', subtitle:'start and end dates', value:'TBD', pledged:[]},
    {title:'Total Budget',subtitle:'total minimal budget', value:'TBD', pledged:[]},
    {title:'Additional Places',subtitle:'places that aren\'t in the US', value:'TBD', pledged:[]},
    {title:'Pledged Senators', subtitle:'people that are committed to the trip 100%', value:'TBD', pledged:[]}
]};

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
