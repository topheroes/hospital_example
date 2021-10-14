import MainLoggedOut from "./MainLoggedOut";
import MainLoggedIn from "./MainLoggedIn";
import React from "react";



function Home(){

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loggedInUser, setLoggedInUser] = React.useState("");

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
