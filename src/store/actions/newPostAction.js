export const newPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    
    var washingtonRef = firestore.collection("NIT Delhi").doc("DC");

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
      capital: true
    })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    dispatch({type: "CREATE_POST", post})
  }
}