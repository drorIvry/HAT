import React, {Component} from 'react';
import Table from 'react-toolbox/lib/table/Table';
import Button from 'react-toolbox/lib/button/Button';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableCell from 'react-toolbox/lib/table/TableCell';
import TableRow from 'react-toolbox/lib/table/TableRow';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {customStyles} from '../modal/modalStyle';
import {pour, getFilteredBucket, chooseCard} from "../actions/bucketActions";
import './CSS/bucket.css';
import ActivityCard from "./ActivityCard";

class Bucket extends Component {

    constructor() {
        super();
        this.state = {
            deleteMode: false,
            selected: {},
            openModal: false,
            cardOpen: false,
        }
    }

    select(newSelected) {

        console.log(this);
        const tempActivities = [...this.props.bucket.activities]

        const items = newSelected.map((item) => {
            return tempActivities[item].name
        });
        const tempSelected = {...this.state.selected}
        for (const item in items) {


            if (items[item] in tempSelected)
                delete tempSelected[items[item]];
            else
                tempSelected[items[item]] = items[item];
        }
        this.setState({selected: {...tempSelected}});
    }

    componentWillMount() {


        if (this.props.bucket.filters.length === 0)
            this.props.doPour();
        else
            this.props.doGetFilteredBucket(this.props.bucket.filters);
    }

    openCard(item) {
        this.props.doChooseCard(item);
        this.setState({cardOpen: true});
    }


    render() {
        return (
            <div className={'bucketContainer'}>
                <Modal isOpen={this.state.cardOpen} style={customStyles} onRequestClose={() => {
                    this.setState({cardOpen: false})
                }}>
                    <ActivityCard/>
                </Modal>

                <div className={'bucketForm'}>
                    <Table multiSelectable={false} selectable={this.state.deleteMode}
                           onRowSelect={this.select.bind(this)}>
                        <TableHead displaySelect={false}>
                            <TableCell>Name</TableCell>
                            <TableCell>Links</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Tags</TableCell>
                        </TableHead>

                        {
                            this.props.bucket.activities.map((item, id) => {
                                return (
                                    <TableRow key={id} selected={item.name in this.state.selected}
                                              onClick={this.openCard.bind(this, item)}>
                                        <TableCell><p>{item.name}</p></TableCell>
                                        <TableCell>{item.description}</TableCell>
                                        <TableCell>{item.state}</TableCell>
                                        <TableCell>{item.address}</TableCell>
                                        <TableCell>{item.tags}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </Table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bucket: state.bucket
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doPour: () => {
            dispatch(pour());
        },
        doGetFilteredBucket: (filters) => {
            dispatch(getFilteredBucket(filters));
        },
        doChooseCard: (item) => {
            dispatch(chooseCard(item));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bucket);
