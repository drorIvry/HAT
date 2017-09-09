export function login(user){
    return {
        type:"LOGIN",
        payload:{
            user:user
        }
    }
}

export function loggout(){
    return {
        type:"LOGOUT",
        payload:{
        }
    }
}

