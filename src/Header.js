import React, {useContext} from "react";

import {
  useHistory,
    Link
  } from "react-router-dom";
  import { isLoggedInContext } from "./contexts";


function Header({setIsOpen}){
    
    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInContext);
    const history = useHistory();
    

    return(
        <>
        <header className="header">
        <div className="header-logo">
          logo
        </div>
        <div className="header-buttons">
          <Link to="/contacts"><button className="contacts-btn">Контакты</button></Link>
          <button className="sign-btn" onClick={()=> isLoggedIn ?  (()=>{localStorage.removeItem("loggedInUser") ; setIsLoggedIn(false); history.push("/"); })() : setIsOpen(true)}>{isLoggedIn ? "Выйти" : "Войти"}</button>
          
        </div>
      </header>
      <div className="header-line"></div>
      </>
    )


    
}


export default Header;