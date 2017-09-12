import axios from 'axios';
import serverProps from '../serverProps/ServerProps';

export function serverLogin(user, password) {
    return new Promise((resolve, reject) => {
        axios.get(serverProps.server + serverProps.loginAPI, {params: {username: user, password}});
    })


}