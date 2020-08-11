import React from 'react';
import { Link, Route, } from "react-router-dom";
import SingleProduct from './components/SingleProduct';
import SignUp from './components/SignUp';
import Products from './components/Products';
import SignIn from './components/SignIn';


import './App.css';


class App extends React.Component{
  render() {
    return(
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            
            <li>
              <Link to="/">SignIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/singleproduct">SingleProduct</Link>
            </li>
          </ul>
        </nav>
        <switch>
        <Route exact={true} path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/products" component={Products} />
        <Route path="/singleproduct" component={SingleProduct} />
        </switch>
      </div>
  )
  }
}



export default App;
