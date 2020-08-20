import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from "./store/reducers/rootReducer"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {getFireStore, reduxFirestore, createFirestoreInstance} from "redux-firestore"
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase"
import fbConfig from "./config/fbConfig"
import firebase from "firebase/app";


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFireStore, getFirebase })),
    reduxFirestore(fbConfig)
  )
)
const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);