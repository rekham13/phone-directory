import React,{Component} from 'react';
import Header from './Header.js';
import "./AddSubscriber.css";
import {Link} from 'react-router-dom';


class AddSubscriber extends Component{
    constructor(){
        super();
        this.state = {
            id:0,
            name:"",
            phone:""
        }
    };

    changeHandler = (e)=>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmitHandler = (e)=>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({
            id:0,
            name:"",
            phone:""
        });
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
            <Header headerName="Add Subscriber"></Header>
            <div className="wrapper">
                <Link to="/">
                    <button className="btn">BACK</button>
                </Link>
                <form className="add-subscriber-form" onSubmit={this.onSubmitHandler}> 
                    <div className="control-container">
                        <label htmlFor="name" className="heading">Name</label>
                        <input id="name" className="input-control" name="name" onChange={this.changeHandler}></input>
                    </div>
                    <div className="control-container">
                        <label htmlFor="phone" className="heading">Phone</label>
                        <input id="phone" className="input-control" name="phone" onChange={this.changeHandler}></input>
                    </div>
                    <div className="subscriber-to-be-added">
                        <label>Subscriber to be added</label>
                        <div className="preview">
                            <div className="name-preview">
                                <label className="heading">Name: {this.state.name}</label>
                            </div>  
                            <div className="phone-preview">
                                <label className="heading">Phone: {this.state.phone}</label>
                            </div>
                        </div>
                        <button type="submit" className="btn add-btn">ADD</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default AddSubscriber;