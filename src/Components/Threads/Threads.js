import React, { Component } from "react";
import "./Threads.css";
import { Link } from "react-router-dom";
import NewColOrThread from "../NewCollegeOrThread/NewColOrThread";

export default class Threads extends Component {
  handleNewThread = (e) => {
    document.body.classList.toggle("new-thread-active")
  }
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
        <i onClick={this.handleNewThread} class="fa fa-plus-circle create-new-thread" aria-hidden="true"></i>
        <div className="new-thread">
          <NewColOrThread />
        </div>
      </div>
    );
  }
}
