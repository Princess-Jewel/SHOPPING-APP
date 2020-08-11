import React, {Component} from 'react';
import { Link } from "react-router-dom";

class SignUp extends Component{
    render(){
        return(

            
<body class="signup">
    <div class="registration-form">
        Create a donor account
        <div class="row">
            <form>
                <div class="input-fields col-12">
                    <div class="row">
                        <div class="form-group col-6">
                            <label for="firstname">First Name</label>
                            <input type="text" class="form-control" id="firstname" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="lastname">Last Name</label>
                            <input type="text" class="form-control" id="lastname" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="age">Age</label>
                            <input type="text" class="form-control" id="age" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="phonenumber">Phone Number</label>
                            <input type="text" class="form-control" id="phonenumber" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="emailaddress">Email Address</label>
                            <input type="text" class="form-control" id="emailaddress" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="password">Password</label>
                            <input type="text" class="form-control" id="password" required />
                        </div>
                        <div class="form-check col-6" >
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1" style= {{padding: "0px;"}}>I accept <span style= {{color: "#06DCA9"}}><strong>terms & conditions</strong></span></label>
                        </div>
                        <div class="form-group col-6">
                            <Link class="btn btn-success link-buttons" style= {{width: "70%",float: "right"}} to="/products">Proceed</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    
    </div>
   
</body>
        )
    }
}
export default SignUp;