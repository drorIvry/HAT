export function login(user, password){
    return {
        type:"LOGIN",
        payload:{
            user:user,
            password:password
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

