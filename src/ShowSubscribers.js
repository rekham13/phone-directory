import React,{Component} from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component{
  onDeleteHandler = (toBeDeletedId)=>{
    this.props.deleteSubscriberHandler(toBeDeletedId);
  }
  render(){
    return(
      <div>
      <Header headerName="Phone Directory"/>
      <div className="wrapper">
        <Link to="/add">
          <button className="btn add-btn">ADD</button>
        </Link>
        <div className="grid-container">
          <span className="grid-item name-span heading">NAME</span>
          <span className="grid-item phone-span heading">PHONE</span>
        </div>
        {
          this.props.subscribersList.map(subscriber=>{
            return <div key={subscriber.id} className="grid-container">
              <span className="grid-item name-span">{subscriber.name}</span>
              <span className="grid-item phone-span">{subscriber.phone}</span>
              <button className="btn delete-btn" onClick={this.onDeleteHandler.bind(this,subscriber.id)}>DELETE</button>
            </div>
          })
        }
      </div>
    </div>
    )
  }
}


export default ShowSubscribers;
