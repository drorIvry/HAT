import React, {Component} from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import Button from 'react-toolbox/lib/button/Button';
import Chip from 'react-toolbox/lib/chip/Chip';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import {vote} from '../serverAPI/serverAPI';
import { validatePledge} from "../actions/pledgeAction";
import hacks from '../icons/Hacks';

class SummeryCard extends Component {

    render() {
        console.log(this.props);
        return (
            <div className={'wrapper'}>
                <Card>
                    <CardTitle>
                        <List>
                            <ListItem ripple={false} avatar={this.props.avatar} caption={this.props.title}
                                      legend={this.props.subtitle} rightIcon={
                                this.props.voted.length >= 3 ? 'star' : this.props.voted.length === 0 ? 'star_border' : 'star_half'}/>
                        </List>
                    </CardTitle>
                    <CardText>{this.props.value}</CardText>
                    <CardTitle title="pledged senators"/>
                    <CardText>{this.props.voted.map((vote,index)=>{return<Chip key={index}>
                        <Avatar><img src={hacks[vote]}/></Avatar>
                        <span>{vote}</span>
                    </Chip>})}</CardText>
                    <CardActions>
                        <Button icon={'person_add'} onClick={this.doVote.bind(this)}/>
                    </CardActions>
                </Card>
            </div>
        );
    }

    doVote(){
        const title = this.props.title;
        const voted = [...this.props.voted];
        const user = this.props.user;

        const pledged = validatePledge(user).then((pledged) => {

            console.log('pledged', pledged);

            if(!pledged){
                alert('only pledged members can vote!');
                return;
            }

            console.log(this.props);

            /*if(user === "please login") {
                alert('please login');
                return;
            }*/

            if (voted.indexOf(user) !== -1) {
                alert('can\'t vote twice');
                return;
            }

            voted.push(user);

            vote(title,voted).then(()=>{
                window.location.reload();
            }).catch((err)=>{
                console.error("aaaaaa",err);
            });
        }).catch(
            (error) => {
                console.error(error)
            }
        );


    }
}

export default SummeryCard;
