import React, { Component } from "react";
import "./Threads.css";
import { Link } from "react-router-dom";

export default class Threads extends Component {
  render() {
    return (
      <div className="threads-container">
        <Link to="/" className="thread-link">
          <h2 onClick={this.handleClick}>#Coding</h2>
        </Link>
        <Link to="/" className="thread-link">
          <h2 onClick={this.handleClick}>#Coding</h2>
        </Link>
        <Link to="/" className="thread-link">
          <h2 onClick={this.handleClick}>#Coding</h2>
        </Link>
        <Link to="/" className="thread-link">
          <h2 onClick={this.handleClick}>#Coding</h2>
        </Link>
        <Link to="/" className="thread-link">
          <h2 onClick={this.handleClick}>#Coding</h2>
        </Link>
      </div>
    );
  }
}
