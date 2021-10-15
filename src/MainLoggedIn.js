import React from "react";
import {
    Link
  } from "react-router-dom";
import Header from "./Header";

function MainLoggedIn({setIsLoggedIn, loggedInUser}){

    return(
        <>
            
        <Header/>
        
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