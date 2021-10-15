import './App.css';
import React from 'react';
import LoginForm from "./LogInForm";


import {
    
    Link
  } from "react-router-dom";




function MainBlockCard({imageLink, mainText, fishText}) {

  return (
    <div className="main-block-card">
      <div className="main-block-card__img">
        <img src={imageLink} alt="card icon"></img>
      </div>
      <div className="main-block-card__title">
        <h5>{mainText}</h5>
      </div>
      <div className="main-block-card__line"></div>
      <div className="main-block-card__text">
        <p>{fishText}</p>
      </div>
    </div>
  )
}
function MainLoggedOut({setIsLoggedIn}) {


  

  const [modalIsOpen, setIsOpen] = React.useState(false);

  

  

  function openModal() {
    setIsOpen(true);
  }

 

  return (
    <div className="App">
      <LoginForm modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} setIsLoggedIn={setIsLoggedIn}/>
      <header className="header">
        <div className="header-logo">
          logo
        </div>
        <div className="header-buttons">
          <Link to="/contacts"><button className="contacts-btn">Контакты</button></Link>
          <button className="sign-btn" onClick={()=>openModal()}>Войти</button>
        </div>
      </header>
      <div className="header-line"></div>
      <main className="main">
        <div className="main-title">
          <h1>Место для получения<br />
            медицинской помощи</h1>
        </div>
        <div className="main-buttons">
          <button className="main-contacts-btn">Войти</button>
          <button className="main-sign-btn">Контакты</button>
        </div>
        <div className="main-block">
          <MainBlockCard imageLink="./images/icon1.png" mainText="Онлайн-прием" fishText="Рыба текст" />
          <MainBlockCard imageLink="./images/icon2.png" mainText="Экстренный случай" fishText="Рыба текст" />
          <MainBlockCard imageLink="./images/icon3.png" mainText="Лечение рака" fishText="Рыба текст" />
        </div>
      </main>
    </div>
  );
}


export default MainLoggedOut;