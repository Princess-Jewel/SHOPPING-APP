import React from 'react';
import { Link, Route, } from "react-router-dom";
import SingleProduct from './components/SingleProduct';
import SingleProduct1 from './components/SingleProduct1';
import SingleProduct2 from './components/SingleProduct2';
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
            <li>
              <Link to="/singleproduct1">SingleProduct1</Link>
            </li>
            <li>
              <Link to="/singleproduct2">SingleProduct2</Link>
            </li>
          </ul>
        </nav>
        <switch>
        <Route exact={true} path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/products" component={Products} />
        <Route path="/singleproduct" component={SingleProduct} />
        <Route path="/singleproduct1" component={SingleProduct1} />
        <Route path="/singleproduct2" component={SingleProduct2} />
        </switch>
      </div>
  )
  }
}



export default App;
