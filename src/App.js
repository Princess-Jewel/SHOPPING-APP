import React from 'react';
import {  Route } from "react-router-dom";
import SingleProduct from './components/SingleProduct';
import SingleProduct1 from './components/SingleProduct1';
import SingleProduct2 from './components/SingleProduct2';
import SignUp from './components/SignUp';
import Products from './components/Products';
import Hey from './components/Hey';


import './App.css';


class App extends React.Component{
  render() {
    return(
      <div>
    
        <switch>
        <Route exact={true} path="/" component={Hey} />
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
