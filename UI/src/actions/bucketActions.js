import { filterBucket, pourBucket } from '../serverAPI/serverAPI';

export function filter(filters){
    return {
        type:"FILTER",
        payload:filters
    }
}

export function clearFilters(){
    return {
        type:"CLEAR_FILTERS",
        payload:{
        }
    }
}

export function pour(){
    return {
        type:"POUR",
        payload: pourBucket()
    }
}

export function getFilteredBucket(filter){
    return {
        type:"GET_FILTERED",
        payload: filterBucket(filter)
    }
}



