import React, { Component } from 'react'
import "./Navbar.css"

export default class Navbar extends Component {
  state = {
    active: false
  }
  handleToggle = (e) => {
    this.setState(prevState => {
      return {active: !prevState.active}
    })
  }
  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className="brand">
            <div className="college-logo"></div>
            <h1>College Name</h1>
          </div>
          <i className="fa fa-bars" aria-hidden="true" onClick={this.handleToggle}/>
        </div>
        <div className={`right-sidebar ${this.state.active ? "active-sidebars" : ""}`}></div>
        <div className={`left-sidebar ${this.state.active ? "active-sidebars" : ""}`}></div>
      </div>
    );
  }
}
