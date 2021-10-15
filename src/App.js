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

  const[isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loggedInUser, setLoggedInUser] = React.useState("");

  return(
    
    <Router>
    
    <Switch>
      <Route path="/contacts">
        <Contacts IsLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      </Route>
      <Route path="/">
        <Home IsLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      </Route>
      
    </Switch>
  
</Router>


  )

}


export default App;
