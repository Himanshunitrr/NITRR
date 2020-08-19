import React, { Component } from 'react'
import "./NewPost.css"
import {newPost} from "../../store/actions/newPostAction"
import {connect} from "react-redux"
class NewPost extends Component {
  state = {
    title: "",
    content: ""
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  handleNewPostSubmit = (event) => {
    event.preventDefault()
    this.props.newPost(this.state)
  }
  render() {
    return (
      <div className="new-post">
        <form  className="new-post-form" action="" onSubmit={this.handleNewPostSubmit}>
          <label for="title">Hacking Title</label>
          <input onChange={this.handleChange} type="text" name="title" id="title" />
          <label for="title">How to hack</label>
          <textarea onChange={this.handleChange} name="content" id="content" rows="4" cols="50" />
          <button>Hack</button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    newPost: (post) => dispatch(newPost(post))
  }
}

export default connect(null, mapDispatchToProps)(NewPost);