import React from "react";
import {
    
    Link
  } from "react-router-dom";

function MainLoggedIn({setIsLoggedIn, loggedInUser}){


    return(
        <>
            
            

            <header className="header">
        <div className="header-logo">
          logo
        </div>
        <div className="header-buttons">
          <Link to="/contacts"><button className="contacts-btn">Контакты</button></Link>
          <button className="sign-btn" onClick={()=>{localStorage.removeItem("loggedInUser");setIsLoggedIn(false);}}>Выйти</button>
        </div>
      </header>
      <div className="header-line"></div>

        Привет, {loggedInUser}

        </>
    )


}




export default MainLoggedIn;