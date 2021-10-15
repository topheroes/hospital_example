import React, {useContext}  from "react";
import {
    Link
  } 
from "react-router-dom";
import { isLoggedInContext, loggedInUserContext } from "./contexts";
import LoginForm from "./LogInForm";


function Contacts(){

    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInContext);
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    

    return (
        <>
            <header className="header">
                <LoginForm modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} setIsLoggedIn={setIsLoggedIn}/>
                <div className="header-logo">
                    logo
                </div>
                <div className="header-buttons">
                    <Link to="/contacts"><button className="contacts-btn">Контакты</button></Link>
                    <button className="sign-btn" onClick={()=> isLoggedIn ? setIsLoggedIn(false) : setIsOpen(true)}>{isLoggedIn ? "Выйти" : "Войти"}</button>
                </div>
            </header>
            <div className="header-line"></div>
            <div className="contacts-title">Контакты</div>
        </>
    )

}

export default Contacts;