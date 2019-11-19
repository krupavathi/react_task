import React from 'react';
import './App.css'
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
        <Route exact path='/' components={Signin}></Route>
        <Route exact path='/Signup'components={Signup}></Route>
        </Switch>
      </Router> */}
      <Signin/>
      <Signup/>
    </div>
  );
}

export default App;
