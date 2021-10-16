import React from "react";
import {
  useHistory,
    Link,
  } from "react-router-dom";
import Header from "./Header";

function MainLoggedIn({isLoggedIn, setIsOpen, setIsLoggedIn, loggedInUser}){

  const history = useHistory();

  console.log(`isLoggedIn us ${isLoggedIn}`)

    return(
        <>
            
        <Header/>
        
        <div className="main-logged">
          <h1 className="main-logged-title">Привет, {loggedInUser}</h1>
          <div className="main-logged-buttons">
          <button className="main-logged-sign-btn" onClick={()=> isLoggedIn ? (()=>{localStorage.removeItem("loggedInUser");setIsLoggedIn(false); history.push("/"); }) () : setIsOpen(true)}>{isLoggedIn ? "Выйти из аккаунта" : "Войти"}</button> 
          <Link to="/contacts"><button className="main-logged-contacts-btn">Перейти в контакты</button></Link>
          </div>
        </div>

        </>
    )

}


export default MainLoggedIn;