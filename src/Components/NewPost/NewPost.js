import React, { Component } from 'react'
import "./NewPost.css"
export default class NewPost extends Component {
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
