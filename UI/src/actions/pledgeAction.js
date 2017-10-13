import {serverPledge, getUsers} from "../serverAPI/serverAPI";

export function pledge(user) {
    return {
        type: "PLEDGE",
        payload: serverPledge(user)
    }
}

export function validatePledge(userName) {

    return new Promise((resolve, reject) => {
        getUsers().then((res) => {

            for (let index in res.data) {
                let user = res.data[index];

                console.log(user.pledged);

                if (user.username === userName)
                    resolve(user.pledged);


            }
            console.log('wat');
            resolve(false);
        }).catch((err) => {
            console.error(err);
            reject(err);
        })
    })
}
