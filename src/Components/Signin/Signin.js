import React, { Component } from 'react';
import panda from './panda.jpg';
import './Signin.css';

class Signin extends Component {
    render() {
        return (
            <div className="logindiv">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <h1>LOGIN FORM</h1>
                <img src={panda} id="image"/><br></br>
                <input type="text"  placeholder="Mobile or Email" className="inputfield"/><br></br><br></br>
                <input type="password"  placeholder="password"  className="inputfield"/><br></br><br></br>
                <input type="checkbox"/>remember Me
                <span id="text">forgot password?</span><br></br><br></br>
                <button>login</button><br></br><br></br>
                <span>create a new account</span><br></br><br></br>
                 <center>or</center><br></br>
                 <a href="#" class="fa fa-facebook"></a>
                 <a href="#" class="fa fa-twitter"></a>
                 <a href="#" class="fa fa-google"></a>
                 

                
                
            </div>
        );
    }
}

export default Signin;