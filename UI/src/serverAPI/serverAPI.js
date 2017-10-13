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
    });
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
    });
}

export function pourBucket() {
    return new Promise((resolve, reject) => {
        axios.get(serverProps.server + serverProps.bucketAPI, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(resolve)
            .catch(reject);
    });
}

export function addToBucket(activity) {
    return new Promise((resolve, reject) => {
        axios.post(serverProps.server + serverProps.bucketAPI, activity , {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(resolve)
            .catch(reject);
    });
}

export function filterBucket(filter) {
    return new Promise((resolve, reject) => {
        axios.post(serverProps.server + serverProps.filterBucketAPI ,{filters:filter})
            .then(resolve)
            .catch(reject);
    });
}

export function getAllmotions() {
    return new Promise((resolve, reject) => {
        axios.get(serverProps.server + serverProps.motionsAPI, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(resolve)
            .catch(reject);
    });
}

export function addMotionToVote(motion) {
    return new Promise((resolve, reject) => {
        axios.post(serverProps.server + serverProps.motionsAPI, motion , {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(resolve)
            .catch(reject);
    });
}

export function vote(title, voted) {
    return new Promise((resolve, reject) => {
        axios.post(serverProps.server + serverProps.voteAPI, {
        title:title, voted:voted
    } , {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(resolve)
        .catch(reject);
    });
}

export function getUsers() {
    return new Promise((resolve, reject) => {
        axios.get(serverProps.server + serverProps.getUsers, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(resolve)
            .catch(reject);
    });
}



