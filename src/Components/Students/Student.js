import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Student.css"

export default class Student extends Component {
  render() {
    return (
      <div className="students-container">
        <Link to="/" className="student-link">
          <h2 onClick={this.handleClick}>Himanshu</h2>
        </Link>
        <Link to="/" className="student-link">
          <h2 onClick={this.handleClick}>Himanshu</h2>
        </Link>
        <Link to="/" className="student-link">
          <h2 onClick={this.handleClick}>Himanshu</h2>
        </Link>
        <Link to="/" className="student-link">
          <h2 onClick={this.handleClick}>Himanshu</h2>
        </Link>
        <Link to="/" className="student-link">
          <h2 onClick={this.handleClick}>Himanshu</h2>
        </Link>
      </div>
    )
  }
}
