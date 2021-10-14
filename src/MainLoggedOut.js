import './App.css';
import React from 'react';
import Modal from 'react-modal';
import users from './user.json';

import {
    
    Link
  } from "react-router-dom";


Modal.setAppElement('#root');




const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


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


  console.log(users[0].user)

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [password, setPassword] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);
  const [errorText, setErrorText] = React.useState("");


  React.useEffect(()=>{
    setIsButtonDisabled(true);
    if(username){
      if(password.length > 7){
        setIsButtonDisabled(false);
      }
    }
  })


  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }


  function handleChange(value, func){
    func(value);
  }

  function handleLogin(){
    setErrorText("");

    var found = users.find((e)=>(e.user===username)&&(e.password===password))
    if(found){
        localStorage.setItem("loggedInUser", found.user);
        setIsLoggedIn(true);
        closeModal();
    }
    else{
      setErrorText("Что-то не так")
    }
    

  }



  return (
    <div className="App">
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="login-form">
            <label for="username">Пользователь:</label>
            <input value={username} onChange={(e)=>handleChange(e.target.value, setUserName)} id="username" type="text" name="login" placeholder="username"></input>
            <label for="password">Пароль:</label>
            <input value={password} onChange={(e)=>handleChange(e.target.value, setPassword)} id="password" type="password" name="password" placeholder="password"></input>
          </div>
          <span>{errorText}</span>
          <div className="main-buttons">
            <button disabled={isButtonDisabled} onClick={()=>console.log(200)} className="main-contacts-btn" onClick={()=>handleLogin()}>Войти</button>
          </div>
        </div>
        </Modal>
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