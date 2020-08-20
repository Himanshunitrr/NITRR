export const newPost = (post) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch({type: "CREATE_POST", post})
  }
}