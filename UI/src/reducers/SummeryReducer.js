import React from 'react';

/**
 * Reducer for login
 */
const initState = {
    budget:{title:'Budget', subtitle:'daily budget', value:'TBD', pledged:'None'},
    dates:{title:'Dates', subtitle:'start and end dates', value:'TBD', pledged:'None'},
    totalBudget:{title:'Total Budget',subtitle:'total minimal budget', value:'TBD', pledged:'None'},
    additionalPlaces:{title:'Additional Places',subtitle:'places that aren\'t in the US', value:'TBD', pledged:'None'},
    pledgedSenators:{title:'Pledged Senators', subtitle:'people that are committed to the trip 100%', value:'TBD', pledged:'None'}
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default reducer;
