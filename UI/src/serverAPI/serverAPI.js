import axios from 'axios';
import serverProps from '../serverProps/ServerProps';

export function serverLogin(user, password) {
    return new Promise((resolve, reject) => {
        axios.get(serverProps.server + serverProps.loginAPI, {
            params: {
                username: user,
                password
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(resolve)
            .catch(reject);
    })
}

export function serverPledge(user) {
    return new Promise((resolve, reject) => {
        axios.get(serverProps.server + serverProps.pledgeAPI, {
            params: {
                username: user,
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(resolve)
            .catch(reject);
    })
}


