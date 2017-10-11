import {serverLogin} from "../serverAPI/serverAPI";

export function login(user, password){
    return {
        type:"LOGIN",
        payload: serverLogin(user,password)
    }
}

export function logout(){
    return {
        type:"LOGOUT",
        payload:{
        }
    }
}