import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, browserHistory } from "react-router-dom";

class LandingPage extends React.Component {

  constructor() {
    super();
    this.state = {
      userInput: false
    }
    this.enterSite = this.enterSite.bind(this);
  }

  enterSite() {
    console.log('clicked');
      this.setState({
        userInput: true
      }, () => {
        window.location.href = "https://mlgblockchain.com/";
      })
    } 
  
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Hi 👋 Welcome to MLS Blockchain Consulting</h1>
          <h2>Are you ready to be a part of the Blockchain solution? I know I am!</h2>
          <button onClick={this.enterSite}>Join Us</button>
        </div>
      </div>
    )
  }
}

export default LandingPage;