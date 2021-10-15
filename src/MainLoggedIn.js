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

        <div className="main-logged">
          <h1 className="main-logged-title">Привет, {loggedInUser}</h1>
          <div className="main-logged-buttons">
            <button className="main-logged-sign-btn">Выйти из аккаунта</button>
            <button className="main-logged-contacts-btn">Перейти в контакты</button>
          </div>
        </div>

        </>
    )

}


export default MainLoggedIn;