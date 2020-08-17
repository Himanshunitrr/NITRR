import React, { Component } from "react";
import "./Colleges.css";
import { Link } from "react-router-dom";
import NewColOrThread from "../NewCollegeOrThread/NewColOrThread";


export default class Colleges extends Component {
  handleNewCollege = (e) => {
    document.body.classList.toggle("new-college-active")
  }
  render() {
    return (
      <div className="colleges-container">
        <Link className="college-link">
          <h2>NITRR</h2>
        </Link>
        <Link className="college-link">
          <h2>NITRR</h2>
        </Link>
        <Link className="college-link">
          <h2>NITRR</h2>
        </Link>
        <Link className="college-link">
          <h2>NITRR</h2>
        </Link>
        <Link className="college-link">
          <h2>NITRR</h2>
        </Link>
        <Link className="college-link">
          <h2>NITRR</h2>
        </Link>
        <Link className="college-link">
          <h2>NITRR</h2>
        </Link>
        <i onClick={this.handleNewCollege} class="fa fa-plus-circle create-new-college" aria-hidden="true"></i>
        <div className="new-college">
          <NewColOrThread />
        </div>
      </div>
    );
  }
}
