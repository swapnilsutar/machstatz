import React from "react";
import {  Route, Switch } from "react-router-dom";
import Home from './Home';
import Fav from './Fav';
import Nav from './Nav';
import Footer from "./Footer";

function App(){
  
  
  return(

    <>
      <Nav />

        <Switch>

            <Route exact path='/machstatz' component={Home}></Route>
            <Route exact path='/favourite' component={Fav}></Route>
        
        </Switch>
        
        <Footer/>
    </>
  )
}


export default App;