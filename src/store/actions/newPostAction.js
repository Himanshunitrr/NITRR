export const newPost = (post) => {
  return (dispatch, getState) => {
    dispatch({type: "CREATE_POST", post})
  }
}