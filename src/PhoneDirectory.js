import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowSubscribers from './ShowSubscribers';


class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Shilpa Bhat",
                    phone: "9999999999"
                },
                {
                    id: 2,
                    name: "Srishti Gupta",
                    phone: "8888888888"
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber)=>{
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length>0){
            newSubscriber.id = subscribersList[subscribersList.length-1].id + 1;
        }else{
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({
            subscribersList:subscribersList
        })
        console.log(this.state);
    }

    deleteSubscriberHandler = (toBeDeletedId)=>{
        let list = this.state.subscribersList;
        let indexToBeDeleted = 0;
        list.forEach((subscriber,index)=>{
            if(subscriber.id === toBeDeletedId){
                indexToBeDeleted = index;
            }
        })

        list.splice(indexToBeDeleted,1);
        this.setState({subscribersList:list});
    }

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" render={(props)=> <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler = {this.deleteSubscriberHandler}/>}/>
                    <Route exact path="/add" render={({history},props)=><AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />}/>
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;