import React, { Component } from 'react'
import "./NewPost.css"
import {newPost} from "../../store/actions/newPostAction"
import {connect} from "react-redux"
class NewPost extends Component {
  render() {
    return (
      <div className="new-post">
        <form  className="new-post-form" action="">
          <label for="title">Hacking Title</label>
          <input type="text" name="title" id="title" />
          <label for="title">How to hack</label>
          <textarea name="content" id="content" rows="4" cols="50" />
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