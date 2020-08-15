import React, { Component } from 'react'
import "./Profile.css"
import ProfileImg from "./Profile.jpg"

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src={ProfileImg} alt=""/>
        <h2>Himanshu</h2>
        <h2>New Delhi</h2>
        <h2>College Name</h2>
        <h2>Posts</h2>
      </div>
    )
  }
}
