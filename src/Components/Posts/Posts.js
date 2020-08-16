import React, { Component } from 'react'
import Post from "./Post"
import { Link } from 'react-router-dom'
import "./Posts.css"

export default class Posts extends Component {
  render() {
    return (
      <div className="posts-container">
        <Link to="/singlePost" className="post-link">
          <Post/>
        </Link>
        <Link to="/" className="post-link">
          <Post/>
        </Link>
        <Link to="/" className="post-link">
          <Post/>
        </Link>
        <Link to="/" className="post-link">
          <Post/>
        </Link>
        <Link to="/" className="post-link">
          <Post/>
        </Link>
      </div>
    )
  }
}
