import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'  
import Navbar from "./Components/Navbar/Navbar"
import Threads from "./Components/Threads/Threads"
import "./App.css"
import Colleges from "./Components/Colleges/Colleges"
import Students from "./Components/Students/Student"
import Posts from "./Components/Posts/Posts"
import MobFooter from './Components/MobFooter/MobFooter';
import SinglePost from "./Components/SinglePost/SinglePost"
import NewPost from './Components/NewPost/NewPost';

class App extends React.Component {
  handleNewPost = (e) => {
    document.body.classList.toggle("new-post-active")
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="page">
            <Threads />
            <Colleges />
            <Students />
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/singlePost/:id" component={SinglePost} />
            </Switch>
          </div>
          <NewPost />
          <i onClick={this.handleNewPost} class="fa fa-plus-circle" aria-hidden="true"></i>
          <MobFooter />
        </Router>
      </div>
    );
  }
}

export default App;
