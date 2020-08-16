import React, { Component } from 'react'

export default class NewPost extends Component {
  render() {
    return (
      <div>
        <form action="">
          <label for="title">Hacking Title</label>
          <input type="text" name="" id="title" />
          <label for="title">How to hack</label>
          <input type="text" name="" id="content" />
          <button>Hack</button>
        </form>
      </div>
    )
  }
}
