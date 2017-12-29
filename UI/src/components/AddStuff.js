import React, {Component} from 'react';
import './CSS/addStuff.css';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import usStates from '../states/USStates';
import tags from '../icons/tagIcons';
import {addToBucket} from "../serverAPI/serverAPI";
import Snackbar from 'react-toolbox/lib/snackbar/Snackbar';
import history from '../history';

class AddStuff extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            description:'',
            address:'',
            state:'',
            links:'',
            tags:[],
            required:false,
            message:'',
            snackBarActive:false
        }
    }

    render() {
        return (
            <div className={'addContainer'}>
                <div className={'addForm'}>
                    <h2>Add an activity</h2>

                    <Autocomplete
                        direction="down"
                        onChange={(value) => {this.setState({tags:value});}}
                        label="Tags"
                        source={Object.keys(tags)}
                        value={this.state.tags}
                    />

                    <Input label={'Name'} name={'name'} value={this.state.name} required={this.state.required}  onChange={this.handleChange.bind(this, 'name')}/>
                    <Autocomplete direction="down" label="State" hint="You can only choose one..."
                        multiple={false}
                        onChange={(value) => {this.setState({state:value});}}
                        source={Object.keys(usStates)}
                        value={this.state.state}
                    />
                    <Input label={'Address'} name={'address'} value={this.state.address} onChange={this.handleChange.bind(this, 'address')}/>
                    <Input label={'Links'} name={'links'} value={this.state.links} multiline  onChange={this.handleChange.bind(this, 'links')}/>
                    <Input label={'Description'} name={'description'} value={this.state.description} multiline  onChange={this.handleChange.bind(this, 'description')}/>

                    <Button label={'Add'} primary raised icon={'add'} onClick={this.add.bind(this)}/>
                </div>

                <Snackbar
                    action='Dismiss'
                    active={this.state.snackBarActive}
                    label={this.state.message}
                    type='cancel'
                />

            </div>
        );
    }

    add(){
        let data = {
            name:this.state.name,
            links:this.state.links.split('\n'),
            description:this.state.description,
            state: usStates[this.state.state],
            address: this.state.address,
            tags:this.state.tags
        };

        console.log(data);

        addToBucket(data).then(()=>{
            this.setState({message:"added successfully",snackBarActive:true});

            setTimeout(() =>{
                history.push('/dashboard');
            },2000);

        }).catch((error) => {
            this.setState({message:"SOMETHING WENT WRONG",snackBarActive:true});
            console.error(error);
        })
    }

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value, required:true});
    };
}

export default AddStuff;
