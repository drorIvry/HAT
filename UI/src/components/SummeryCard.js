import React, {Component} from 'react';
import  Card from 'react-toolbox/lib/card/Card';
import  CardTitle from 'react-toolbox/lib/card/CardTitle';
import  CardText from 'react-toolbox/lib/card/CardText';

class SummeryCard extends Component {
    render() {
        return (
            <div className={'wrapper'}>
                <Card>
                    <CardTitle
                        avatar={this.props.avatar}
                        title={this.props.title}
                        subtitle={this.props.subtitle}
                    />

                    <CardText>{this.props.value}</CardText>
                    <CardTitle title="pledged senators"/>
                    <CardText>{this.props.pledged}</CardText>
                </Card>
            </div>
        );
    }
}

export default SummeryCard;
