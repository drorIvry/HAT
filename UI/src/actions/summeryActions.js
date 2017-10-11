import {getAllmotions} from '../serverAPI/serverAPI'

export function fetchMotions() {
    return {
        type:"GET_MOTIONS",
        payload: getAllmotions()
    };
}