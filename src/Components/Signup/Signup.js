import React, { Component } from 'react';
import './Signup.css';


class Signup extends Component {
    
    render() {
        return (
            <div className="signupdiv">
                <h1>Signup Form</h1>
                <input type="text" placeholder="first name" className="inputfield1"/><br></br><br></br>
                <input type="text" placeholder="last name" className="inputfield1" /><br></br><br></br>
                <input type="text" placeholder="emailid@gmail.com" className="inputfield1"/><br></br><br></br>
                <input type="text" placeholder="enter your phone number" className="inputfield1"/><br></br><br></br>
                <input type="text" placeholder="enter password" className="inputfield1" /><br></br><br></br>
                <input type="text" placeholder="confirm your password" className="inputfield1" /><br></br><br></br>
                <input type="checkbox"/>I agree to term and condition<br></br><br></br>
               <button><a href="./signin"> Signin</a></button>

            </div>
        );
    }
}

export default Signup;