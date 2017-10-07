import React, {Component} from 'react';
import Table from 'react-toolbox/lib/table/Table';
import Button from 'react-toolbox/lib/button/Button';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableCell from 'react-toolbox/lib/table/TableCell';
import TableRow from 'react-toolbox/lib/table/TableRow';


import './CSS/bucket.css';

const temp = [
    {
        name: 'awdwad',
        links:'abc',
        description:'awdwadawdwad',
        tags:'awdawd',
        state:'123123',
        address:'123123',
    },
    {
        name: '123123',
        links:'123123',
        description:'12313123',
        tags:'123123',
        state:'123123',
        address:'123123',
    }
];


class Bucket extends Component {

    constructor(){
        super();
        this.state={
            deleteMode:false,
            selected:{}
        }
    }

    select(newSelected) {

        console.log(newSelected);

        const items = newSelected.map((item) => {return temp[item].name});
        const tempSelected = {...this.state.selected}
        for(const item in items) {


            if(items[item] in tempSelected)
                delete tempSelected[items[item]];
            else
                tempSelected[items[item]] = items[item];
        }
        this.setState({selected:{...tempSelected}});
    }

    render() {
        return (
            <div className={'bucketContainer'}>
                <div className={'bucketForm'}>
                    <Button icon={'delete'} onClick={()=>{this.setState({...this.state,deleteMode:!this.state.deleteMode})}}/>
                    <Table multiSelectable={false} selectable={this.state.deleteMode} onRowSelect={this.select.bind(this)}>
                        <TableHead displaySelect={this.state.deleteMode}>
                            <TableCell>Name</TableCell>
                            <TableCell>Links</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Tags</TableCell>
                        </TableHead>

                        {
                            temp.map((item, id) => {
                                return (
                                    <TableRow key={id} selected={item.name in this.state.selected}>
                                        <TableCell><p>{item.name}</p></TableCell>
                                        <TableCell>{item.links}</TableCell>
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

export default Bucket;
