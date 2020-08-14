import React, { Component } from "react";
import "./Colleges.css";
import { Link } from "react-router-dom";

export default class Colleges extends Component {
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
      </div>
    );
  }
}
