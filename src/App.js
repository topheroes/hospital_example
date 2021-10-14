import Home from "./Home";
import Contacts from "./Contacts";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(){

  


  return(

    
    <Router>
  

  
    <Switch>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      
    </Switch>
  
</Router>



  )


}





export default App;
