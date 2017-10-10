import React, {Component} from 'react';
import './CSS/addStuff.css';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import usStates from '../states/USStates';
import tags from '../icons/tagIcons';

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
            required:false
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

                    <Button label={'Add'} onClick={this.add.bind(this)}/>
                </div>
            </div>
        );
    }

    add(){
        console.log(this.state);
    }

    handleChange = (name, value) => {
        this.setState({...this.state, [name]: value, required:true});
    };
}

export default AddStuff;
