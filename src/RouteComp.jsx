import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Product from "./Components/Product/Product";
import ProductItems from "./Components/ProductItems/ProductItems";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';

const RouteComp = () => {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:id" component={ProductItems} />
          <Route path="*" component={()=><h2>404 Not Found</h2>}/>
        </Switch>
      </div>
    </Router>
  );
};

export default RouteComp;
