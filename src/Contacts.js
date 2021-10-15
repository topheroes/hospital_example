import React, {useContext}  from "react";
import {
    Link
  } 
from "react-router-dom";
import { isLoggedInContext, loggedInUserContext } from "./contexts";


function Contacts(){

    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInContext);
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);

    return (
        <>
            <header className="header">
                <div className="header-logo">
                    logo
                </div>
                <div className="header-buttons">
                    <Link to="/contacts"><button className="contacts-btn">Контакты</button></Link>
                    <button className="sign-btn" onClick={()=>{setIsLoggedIn(false)}}>Выйти</button>
                </div>
            </header>
            <div className="header-line"></div>
            <div className="contacts-title">Контакты</div>
        </>
    )

}

export default Contacts;