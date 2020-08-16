import React, { Component } from 'react'
import "./SinglePost.css"

export default class SinglePost extends Component {
  render() {
    return (
      <div className="single-post">
        <h2>Title</h2>
        <hr/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium quo iure temporibus aliquam facilis neque suscipit ducimus praesentium accusamus, ad accusantium beatae a magni illo obcaecati. Unde, placeat odio!</p>
        <div className="single-post-features">
          <i class="fa fa-heart" aria-hidden="true" />
          <i class="fa fa-comment" aria-hidden="true" />
        </div>
      </div>
    )
  }
}
