import React from 'react';

/**
 * TODO REDO  with server (state as [])
 */
const initState = [
    {title:'Budget', subtitle:'daily budget', value:'TBD', pledged:'None'},
    {title:'Dates', subtitle:'start and end dates', value:'TBD', pledged:'None'},
    {title:'Total Budget',subtitle:'total minimal budget', value:'TBD', pledged:'None'},
    {title:'Additional Places',subtitle:'places that aren\'t in the US', value:'TBD', pledged:'None'},
    {title:'Pledged Senators', subtitle:'people that are committed to the trip 100%', value:'TBD', pledged:'None'}
]

const reducer = (state = initState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default reducer;
