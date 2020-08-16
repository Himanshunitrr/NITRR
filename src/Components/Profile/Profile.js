import React, { Component } from 'react'
import "./Profile.css"
import ProfileImg from "./Profile.jpg"
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src={ProfileImg} alt=""/>
        <h2>Himanshu</h2>
        <h2><i class="fa fa-map-marker" aria-hidden="true"></i>New Delhi</h2>
        <h2>College Name</h2>
        <Link className="posts-link">
          <h2>Posts<i class="fa fa-external-link" aria-hidden="true"></i></h2>
        </Link>
      </div>
    )
  }
}
