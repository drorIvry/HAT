import React from 'react';

/**
 * Reducer for login
 */
const initState = {
    budget:{title:'Budget', subtitle:'daily budget', value:'TBD'},
    dates:{title:'Dates', subtitle:'start and end dates', value:'TBD'},
    totalBudget:{title:'Total Budget',subtitle:'total minimal budget', value:'TBD'},
    additionalPlaces:{title:'Additional Places',subtitle:'places that aren\'t in the US', value:'TBD'},
    pledgedSenators:{title:'Pledged Senators', subtitle:'people that are committed to the trip 100%', value:'TBD'}
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default reducer;
