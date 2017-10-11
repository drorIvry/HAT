import React, {Component} from 'react';
import  Card from 'react-toolbox/lib/card/Card';
import  CardTitle from 'react-toolbox/lib/card/CardTitle';
import  CardText from 'react-toolbox/lib/card/CardText';
import  CardActions from 'react-toolbox/lib/card/CardActions';
import  List from 'react-toolbox/lib/list/List';
import  ListItem from 'react-toolbox/lib/list/ListItem';
import  Button from 'react-toolbox/lib/button/Button';


class SummeryCard extends Component {
    render() {
        return (
            <div className={'wrapper'}>
                <Card >
                    <CardTitle>
                        <List>
                            <ListItem ripple={false} avatar={this.props.avatar} caption={this.props.title} legend={this.props.subtitle} leftIcon={
                                this.props.pledged.length > 3 ? 'star' : this.props.pledged.length  === 0 ? 'star_border' : 'star_half'}/>
                        </List>

                    </CardTitle>

                    <CardText>{this.props.value}</CardText>
                    <CardTitle title="pledged senators"/>
                    <CardText>{this.props.pledged}</CardText>

                    <CardActions>
                        <Button icon={'person_add'} onClick={this.props.vote}/>

                    </CardActions>

                </Card>
            </div>
        );
    }
}

export default SummeryCard;
