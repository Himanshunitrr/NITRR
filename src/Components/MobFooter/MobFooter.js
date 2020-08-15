import React, { Component } from 'react'
import "./MobFooter.css"

export default class MobFooter extends Component {
  handleColleges = (event) => {
    // console.log(event.target.classList)
    let colleges = document.querySelector(".colleges-container")
    let threads = document.querySelector(".threads-container")
    let students = document.querySelector(".students-container")
    if(students.classList.length == 2){students.classList.remove("nav-clicked")}
    if(threads.classList.length == 2){threads.classList.remove("nav-clicked")}

    colleges.classList.toggle("nav-clicked");

  }
  handleThreads = (event) => {
    // console.log(event.target.classList)
    let threads = document.querySelector(".threads-container")
    let colleges = document.querySelector(".colleges-container")
    let students = document.querySelector(".students-container")
    if (students.classList.length == 2) { students.classList.remove("nav-clicked") }
    if (colleges.classList.length == 2) { colleges.classList.remove("nav-clicked") }

    threads.classList.toggle("nav-clicked");

  }
  handleStudents = (event) => {
    // console.log(event.target.classList)
    let students = document.querySelector(".students-container")
    let threads = document.querySelector(".threads-container")
    let colleges = document.querySelector(".colleges-container")


    if (threads.classList.length == 2) { threads.classList.remove("nav-clicked") }
    if (colleges.classList.length == 2) { colleges.classList.remove("nav-clicked") }

    students.classList.toggle("nav-clicked");

  }
  render() {
    return (
      <footer className="footer">
          <i onClick={this.handleColleges} class="fa fa-home" aria-hidden="true"/>
          <i onClick={this.handleThreads} class="fa fa-hashtag" aria-hidden="true"/>
          <i onClick={this.handleStudents} class="fa fa-graduation-cap" aria-hidden="true"/>
      </footer>
    )
  }
}
