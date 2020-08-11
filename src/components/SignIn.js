import React, {Component} from 'react';
import { Link } from "react-router-dom";

class SignIn extends Component{
    render(){
        return(
<body class="signin">
    <form>
    <div class="input-form">
            Sign in to your account
            <div class="input-fields">
            <label for="email"><b>Email</b></label>
            <input type="text" name="email" id="email" required />
                
            <label for="psw"><b>Password</b></label>
            <input type="password" name="psw" id="psw" required />
               

            <div class="checkbox">
            <input type="checkbox" name="" id=""/>
            </div>
                <div class="button">
                <Link class="btn btn-success link-buttons" style= {{width: "40%",float: "right"}} to="/products">SIGN IN</Link>
                </div>
                
            </div>
        </div>
    </form>
    <Link to="/signup">Don't have an account? Sign up</Link>
    
</body>
        )
    }
}
export default SignIn;