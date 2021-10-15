import React, {useContext}  from "react";
import {
    Link
  } 
from "react-router-dom";
import { isLoggedInContext, loggedInUserContext } from "./contexts";
import LoginForm from "./LogInForm";

import Header from "./Header";
function Contacts(){

    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInContext);
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    

    return (
        <>  
             <LoginForm modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} setIsLoggedIn={setIsLoggedIn}/>
            <Header setIsOpen={setIsOpen}/>
            <div className="contacts-title">Контакты</div>
        </>
    )

}

export default Contacts;