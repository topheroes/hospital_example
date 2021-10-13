import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="header">
          <div className="header-logo">
              logo
          </div>
          <div className="header-buttons">
            <button className="contacts-btn">Контакты</button>
            <button className="sign-btn">Войти</button>
          </div>
      </header>
      <div className="header-line"></div>
      <main className="main">
        <div className="main-title">
        <h1>Место для получения<br></br>
        медицинской помощи</h1>
        </div>
        <div className="main-buttons">
            <button className="main-contacts-btn">Войти</button>
            <button className="main-sign-btn">Контакты</button>
        </div>
        <div className="main-block">
            <div className="main-block-one">
              <div className="main-block-one__img">
                <img src="./images/icon1.png" alt="icon1"></img>
              </div>
              <div className="main-block-one__title">
                <h5>Онлайн-прием</h5>
              </div>
              <div className="main-block-one__line"></div>
              <div className="main-block-one__text">
                <p>Рыба текст</p>
              </div>
            </div>
            <div className="main-block-two">
              <div className="main-block-two__img">
                  <img src="./images/icon2.png" alt="icon1"></img>
              </div>
              <div className="main-block-two__title">
                <h5>Экстренный Случай</h5>
              </div>
              <div className="main-block-two__line"></div>
              <div className="main-block-two__text">
                <p>Рыба текст</p>
              </div>
            </div>
            <div className="main-block-three">
              <div className="main-block-three__img">
                  <img src="./images/icon3.png" alt="icon1"></img>
              </div>
              <div className="main-block-three__title">
                <h5>Лечение рака</h5>
              </div>
              <div className="main-block-three__line"></div>
              <div className="main-block-three__text">
                <p>Рыба текст</p>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
