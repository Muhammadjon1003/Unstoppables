import { addUserItemToStorage, get, getStorageItems } from "./utilis.js";

let emailInp = get("#email-input");
let usernameInp = get("#username-input");
let passwordInp = get("#password-input");
let passwordBtn = get(".password-btn");
let signUpBtn = get('.signUp-btn');
let loginBtn = get('.login-btn');
let uid = new Date().getTime().toString().slice(0, 5);
let signUpTitle = get('.signUp-title');
let loginTitle = get('.login-title');

passwordBtn.onclick = function() {
    if (passwordInp.getAttribute('type') === 'password') {
        passwordInp.setAttribute('type', 'text')
    } else{
        passwordInp.setAttribute('type', 'password')
    }
}

signUpBtn.addEventListener('click', function() {
    // let user = getStorageItems(); 
    let user = JSON.parse(localStorage.getItem('user'))
    addUserItemToStorage(uid, emailInp.value, usernameInp.value, passwordInp.value);
    if(signUpTitle.textContent === 'Зарегистрироваться'){
        if(emailInp.value && usernameInp.value && passwordInp.value){
            location.href = '../html/index.html';
        } else {
            throw new Error('User data is incomplete');
        }
    } else{
        if (user) {
            if (user.username === usernameInp.value && user.password === passwordInp.value) {
                location.href = '../html/index.html'
            } else {
                throw new Error('Неправильное имя пользователя или пароль');
            }
        } else {
            throw new Error('Пользователь не найден');
        }
    }
});


loginBtn.addEventListener('click', function() {
    signUpTitle.textContent = 'Вход';
    signUpBtn.textContent = 'Войти';
    emailInp.style.display = 'none';
    loginTitle.textContent = 'У вас ещё нет аккаунта?';
    loginBtn.textContent = 'Зарегисттрироваться';
});