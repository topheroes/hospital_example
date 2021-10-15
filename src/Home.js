import MainLoggedOut from "./MainLoggedOut";
import MainLoggedIn from "./MainLoggedIn";
import React, {useContext} from "react";

import { isLoggedInContext, loggedInUserContext } from "./contexts"

function Home(){

  const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInContext);
  const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);



  React.useEffect(()=>{

    const data = localStorage.getItem("loggedInUser");
    if(data){
      setLoggedInUser(data);
      setIsLoggedIn(true);
    }

  })


  return(

    !isLoggedIn ? <MainLoggedOut setIsLoggedIn={setIsLoggedIn} /> : <MainLoggedIn setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser}/>

  )

}


export default Home;
