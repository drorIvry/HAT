import React, {Component} from 'react';
import SummeryCard from './SummeryCard';
import './CSS/TripSummery.css';
import {connect} from 'react-redux';


class TripSummery extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <div className={'wrapper'}>
            {
                Object.keys(this.props.summery).map((card, index) => {

                    return (<SummeryCard title={this.props.summery[card].title} subtitle={this.props.summery[card].subtitle} value={this.props.summery[card].value} key={index}/>);
                })
            }
        </div>;
    }
}


const mapStateToProps = (state) => {
    return {
        summery: state.summery
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export  default connect(mapStateToProps, mapDispatchToProps)(TripSummery);
