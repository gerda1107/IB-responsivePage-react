import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/inc/nav';
import Footer from './components/inc/footer';
import Home from './views/home';
import Shop from './views/shop';
import Axios from 'axios';

function App() {

  const [getNavIcon, setNavIcon] = useState({ class: "fas fa-bars", trigger: false });
  const [productsArr, setproductsArr] = useState([]);

  // Show nav dropdown menu on a small screen
  const showNav = () => {
        if (!getNavIcon.trigger) {
            document.getElementById("hidden-menu-options").style.height = "250px";
            setNavIcon({class: "fas fa-times", trigger: true});
        } else {
            document.getElementById("hidden-menu-options").style.height = "0px";
            setNavIcon({class: "fas fa-bars", trigger: false});
        }
  }
  
  //Load products
  useEffect(() => {
      getProducts();
  }, [])
  
  const getProducts = () => {
    Axios.get('https://api.jsonbin.io/b/60a916bae2fa0d4db8abd1d5')
        .then(res => {
            setproductsArr(res.data);
  })}
  
  return (
    <Router>
      <div>
        <Nav showNav={showNav} navIconClass={getNavIcon.class} />
        <Switch>
          <Route exact path="/">
            <Home productsArr={productsArr}/>
          </Route>
          <Route exact path="/shop">
            <Shop productsArr={productsArr}/>
          </Route>
        </Switch>
        <Footer/>
      </div> 
    </Router>
  );
}

export default App;
