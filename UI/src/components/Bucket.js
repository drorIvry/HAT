import React, {Component} from 'react';
import Table from 'react-toolbox/lib/table/Table';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableCell from 'react-toolbox/lib/table/TableCell';
import TableRow from 'react-toolbox/lib/table/TableRow';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import {connect} from 'react-redux';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import icons from '../icons/tagIcons';
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

    getAvatars() {
        <Avatar image={icons[this.props.bucket.activeCard.tags[0]]} cover />
    }

    handleToggle() {
        this.setState({cardOpen: false});
    }

    render() {
        return (
            <div className={'bucketContainer'}>
                <Dialog
                    active={this.state.cardOpen}
                    onEscKeyDown={this.handleToggle.bind(this)}
                    onOverlayClick={this.handleToggle.bind(this)}
                    style={{width:"400px"}}
                >
                    <ActivityCard/>
                </Dialog>

                <div className={'bucketForm'}>
                    <Table multiSelectable={false} selectable={this.state.deleteMode}
                           onRowSelect={this.select.bind(this)}>
                        <TableHead displaySelect={false}>
                            <TableCell>Name</TableCell>
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
                                        <TableCell>{
                                            item.tags.map((tag, key) => {
                                                return <Avatar image={icons[tag]} key={key} cover />
                                            })
                                        }</TableCell>
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
