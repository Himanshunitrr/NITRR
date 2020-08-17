import React, { Component } from 'react'
import "./Post.css"

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div className="post-features">
          <i class="fa fa-heart" aria-hidden="true"/>
          <i class="fa fa-comment" aria-hidden="true"/>
        </div>
        <h2>{this.props.post.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis, error quas fugiat pariatur, soluta velit voluptatem voluptate labore distinctio, iusto maxime reprehenderit doloribus nihil. Provident cum perferendis eum eveniet!</p>
      </div>
    )
  }
}
