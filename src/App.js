import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'  
import Navbar from "./Components/Navbar/Navbar"
import Threads from "./Components/Threads/Threads"
import "./App.css"
import Colleges from "./Components/Colleges/Colleges"
import Students from "./Components/Students/Student"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="page">
          <Threads />
          <Colleges />
          <Students/>
        </div>
      </Router>
    </div>
  );
}

export default App;
