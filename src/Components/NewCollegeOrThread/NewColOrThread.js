import React, { Component } from 'react'
import "./NewColOrThread.css"
import { connect } from "react-redux"
class NewColOrThread extends Component {
  render() {
    return (
      <form className="new-college-form" action="">
        <label for="title">Hacking College</label>
        <input type="text" name="college-name" id="college-name" />
        <button>Hack</button>
      </form>
    )
  }
}
/* const mapDispatchToProps = (dispatch) => {
  return {
    newPost: (post) => dispatch(newPost(post))
  }
}
 */
export default NewColOrThread