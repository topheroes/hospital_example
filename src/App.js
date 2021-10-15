import Home from "./Home";
import Contacts from "./Contacts";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { isLoggedInContext, loggedInUserContext } from "./contexts"

function App() {

  const isLoggedInC = React.useState(false);
  const loggedInUserC = React.useState("");

  return (


    <isLoggedInContext.Provider value={isLoggedInC}>
      <loggedInUserContext.Provider value={loggedInUserC}>
        <Router>

          <Switch>
            <Route path="/contacts">
              <Contacts/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>

          </Switch>

        </Router>
      </loggedInUserContext.Provider>
    </isLoggedInContext.Provider>


  )

}


export default App;
