import React, {Component} from 'react';
import './CSS/motionInput.css';
import Input from "react-toolbox/lib/input/Input";
import Button from "react-toolbox/lib/button/Button";
import Snackbar from "react-toolbox/lib/snackbar/Snackbar";
import { addMotionToVote } from '../serverAPI/serverAPI';
import history from '../history';

class MotionInput extends Component {

    constructor(){
        super();
        this.state = {
            title:'',
            subtitle:'',
            value:'',
            avatar:'',
            required:false,
            message:'',
            snackBarActive:false
        }
    }

    render() {
        return (
            <div className={"motionContainer"}>
                <div className={"motionForm"}>
                    <h2>Suggest a motion</h2>

                    <Input label={'Title'} name={'title'} value={this.state.title} required={this.state.required}  onChange={this.handleChange.bind(this, 'title')}/>
                    <Input label={'Description'} name={'subtitle'} value={this.state.subtitle} onChange={this.handleChange.bind(this, 'subtitle')}/>
                    <Input label={'Values'} name={'value'} value={this.state.value} required={this.state.required}  onChange={this.handleChange.bind(this, 'value')}/>
                    <Input label={'Avatar'} name={'avatar'} value={this.state.avatar} onChange={this.handleChange.bind(this, 'avatar')}/>
                    <Button label={'Add'} primary raised icon='add' onClick={this.add.bind(this)}/>

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
            title:this.state.title,
            avatar:this.state.avatar,
            subtitle:this.state.subtitle,
            value: this.state.value,
        };

        console.log(data);

        addMotionToVote(data).then(()=>{
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

export default MotionInput;
