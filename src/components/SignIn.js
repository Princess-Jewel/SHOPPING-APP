import React, {Component} from 'react';
import { Link } from "react-router-dom";

class SignIn extends Component{
    state = {
        email:"",
        password: ""
      };
  
      handleChange = (e)=>{
          this.setState({
            email:e.target.value,
            password:e.target.value
          })
      }
     
     

    render(){
        return(
<body class="signin">
    <form onSubmit={this.handleChange} >
    <div class="input-form">
            Sign in to your account
            <div class="input-fields">
            <label for="email"><b>Email</b></label>
            <input type="text" name="email" id="email" required   value={this.state.email} onChange={this.handleChange}/>
                
            
          
          
      


            <label for="psw"><b>Password</b></label>
            <input type="password" name="psw" id="psw" required  value={this.state.password} onChange={this.handleChange} />
               

            <div class="checkbox">
            <input type="checkbox" name="" id=""/>
            </div>
                <div class="button">
                

                <Link class="btn btn-success link-buttons" style= {{width: "40%",float: "right"}} to="/products">SIGN IN</Link>
               
             {/*  <button disabled={this.state.email.length<1 && this.state.password.length<1}>Submit</button>

               const isEnabled = {this.state.email.length<1 && this.state.password.length<1};

               <button disabled={!isEnabled}>Sign up</button> */}

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