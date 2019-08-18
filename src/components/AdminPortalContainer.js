import React, { Component } from "react";
import PortalContainer from "./PortalContainer";
import {Redirect} from 'react-router-dom'

export default class EmployerPortal extends Component {
  
//Refactor when have time --- currently have three identical components --- also refactor so logout redirect handled in proper location

  renderPortalOrLogin = () => {
      if(this.props.currUser){
        return <PortalContainer currUser={this.props.currUser} updateCurrentUser={this.props.updateCurrentUser} />
      }

      else {
        return <Redirect to='login'/>
      }
  }
  
  
  render() {
    return (
      <div>
        {this.renderPortalOrLogin()}
      </div>
    );
  }
}