import React, {useContext} from "react";

import {
    
    Link
  } from "react-router-dom";
  import { isLoggedInContext } from "./contexts";


function Header({setIsOpen}){
    
    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInContext);
    
    

    return(
        <>
        <header className="header">
        <div className="header-logo">
          logo
        </div>
        <div className="header-buttons">
          <Link to="/contacts"><button className="contacts-btn">Контакты</button></Link>
          <button className="sign-btn" onClick={()=> isLoggedIn ?  (()=>{localStorage.removeItem("loggedInUser") ; setIsLoggedIn(false)})() : setIsOpen(true)}>{isLoggedIn ? "Выйти" : "Войти"}</button>
          
        </div>
      </header>
      <div className="header-line"></div>
      </>
    )


    
}


export default Header;