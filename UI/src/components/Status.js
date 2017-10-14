import React, {Component} from 'react';
import {getUsers} from "../serverAPI/serverAPI";
import Hacks from '../icons/Hacks';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import './CSS/status.css';

class Status extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        getUsers().then((res) => {
            const users = res.data;

            console.log(users);

            this.setState({users: users});
        }).catch((err) => {
            console.error(err);
        });
    }

    render() {
        return (
            <div className={'statusWrapper'}>
                <div className={'form'}>
                {
                    this.state.users.map((user, key) => {

                        let avatar = Hacks[user.username];

                        console.log(user, avatar);


                        return (
                            <Card key={key} className={'Card'}>
                                <CardTitle>
                                    {user.username}
                                </CardTitle>
                                <img src={avatar} className={'profile'}/>

                                <CardText>
                                    {'Pledged:'} <img className={'pledgeStatus'} src={user.pledged ? 'http://www.clker.com/cliparts/6/d/6/3/l/M/check-mark.svg' :"http://www.clker.com/cliparts/U/J/s/I/3/P/red-x-icon-md.png"}/>
                                </CardText>
                            </Card>);
                    })
                }
                </div>
            </div>
        );
    }
}

export default Status;
