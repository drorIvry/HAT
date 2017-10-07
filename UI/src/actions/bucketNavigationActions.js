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