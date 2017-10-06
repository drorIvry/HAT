import {serverPledge} from "../serverAPI/serverAPI";

export function pledge(user){
    return {
        type:"PLEDGE",
        payload: serverPledge(user)
    }
}
