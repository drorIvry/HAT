import axios from 'axios';
import serverProps from '../serverProps/ServerProps';

export function serverLogin(user, password) {
    return new Promise((resolve, reject) => {
        axios.get(serverProps.loginAPI, {
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
        axios.get(serverProps.pledgeAPI, {
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
        axios.get(serverProps.bucketAPI, {
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
        axios.post(serverProps.bucketAPI, activity , {
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
        axios.post(serverProps.filterBucketAPI ,{filters:filter})
            .then(resolve)
            .catch(reject);
    });
}

export function getAllmotions() {
    return new Promise((resolve, reject) => {
        axios.get(serverProps.motionsAPI, {
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
        axios.post(serverProps.motionsAPI, motion , {
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
        axios.post(serverProps.voteAPI, {
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
        axios.get(serverProps.getUsers, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(resolve)
            .catch(reject);
    });
}



