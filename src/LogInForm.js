import Modal from 'react-modal';
import React from 'react';
import users from './user.json';

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


function LoginForm({ modalIsOpen, setIsOpen, setIsLoggedIn }) {
    const [password, setPassword] = React.useState("");
    const [username, setUserName] = React.useState("");

    const [errorText, setErrorText] = React.useState("");


    const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);


    React.useEffect(()=>{
        setIsButtonDisabled(true);
        if(username){
          if(password.length > 7){
            setIsButtonDisabled(false);
          }
        }
      })
    


    function handleChange(value, func) {
        func(value);
    }

    function handleLogin() {
        setErrorText("");

        var found = users.find((e) => (e.user === username) && (e.password === password))
        if (found) {
            localStorage.setItem("loggedInUser", found.user);
            setIsLoggedIn(true);
            closeModal();
        }
        else {
            setErrorText("Что-то не так")
        }

    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <Modal
            isOpen={modalIsOpen}

            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div>
                <div className="login-form">
                    <label for="username">Пользователь:</label>
                    <input value={username} onChange={(e) => handleChange(e.target.value, setUserName)} id="username" type="text" name="login" placeholder="username"></input>
                    <label for="password">Пароль:</label>
                    <input value={password} onChange={(e) => handleChange(e.target.value, setPassword)} id="password" type="password" name="password" placeholder="password"></input>
                </div>
                <span>{errorText}</span>
                <div className="main-buttons">
                    <button disabled={isButtonDisabled} onClick={() => console.log(200)} className="main-contacts-btn" onClick={() => handleLogin()}>Войти</button>
                </div>
            </div>
        </Modal>

    )

}


export default LoginForm;