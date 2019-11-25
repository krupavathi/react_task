import React from 'react';
import './App.css'
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <switch>
        <Route exact path='/' component={Signup}></Route>
        <Route exact path='/signin' component={Signin}></Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
