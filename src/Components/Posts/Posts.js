import React, { Component } from 'react'
import Post from "./Post"
import { Link } from 'react-router-dom'
import "./Posts.css"
import {connect}from "react-redux"

class Posts extends Component {
  render() {
    let {posts} = this.props;
    return (
      <div className="posts-container">
        {posts && posts.map(post => {
          return (
            <Link to="/singlePost/:id" className="post-link">
              <Post post={post} key={post.id} />
            </Link>
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.college.colleges[state.current.current_college]["threads"][state.current.current_thread]
  }
}

export default connect(mapStateToProps, null)(Posts)