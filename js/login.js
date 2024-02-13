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
let errorText = get('.login__error-text')

passwordBtn.onclick = function() {
    if (passwordInp.getAttribute('type') === 'password') {
        passwordInp.setAttribute('type', 'text');
        passwordBtn.querySelector('i').className = 'fa-solid fa-eye';
    } else{
        passwordInp.setAttribute('type', 'password');
        passwordBtn.querySelector('i').className = 'fa-regular fa-eye';
    }
}

signUpBtn.addEventListener('click', function() {
    let user = JSON.parse(localStorage.getItem('user'));
    addUserItemToStorage(uid, emailInp.value, usernameInp.value, passwordInp.value);
    if (signUpTitle.textContent === 'Зарегистрироваться') {
        if (emailInp.value && usernameInp.value && passwordInp.value) {
            location.href = '../html/index.html';
        } else {
            errorText.textContent = "Заполните все поля";
            if (!emailInp.value) {
                emailInp.style.border = '1px solid red';
            }
            if (!usernameInp.value) {
                usernameInp.style.border = '1px solid red';
            }
            if (!passwordInp.value) {
                passwordInp.style.border = '1px solid red';
            }
            throw new Error('User data is incomplete');
        }
    } else {
        if (user && user.username) {
            if (usernameInp.value && passwordInp.value) {
                if (user.username !== usernameInp.value || user.password !== passwordInp.value) {
                    errorText.textContent = "Неправильное имя пользователя или пароль";
                    throw new Error('Неправильное имя пользователя или пароль');
                } else {
                    location.href = '../html/index.html';
                }                
            } else {
                errorText.textContent = "Введите имя пользователя и пароль";
                throw new Error('Введите имя пользователя и пароль');
            }
        } else {
            errorText.textContent = "Пользователь не найден";
            throw new Error('Пользователь не найден');
        }
    }
});



loginBtn.addEventListener('click', function() {
    if (signUpTitle.textContent === 'Зарегистрироваться') {
        signUpTitle.textContent = 'Вход';
        signUpBtn.textContent = 'Войти';
        emailInp.style.display = 'none';
        loginTitle.textContent = 'У вас ещё нет аккаунта?';
        loginBtn.textContent = 'Зарегисттрироваться';
    } else{
        signUpTitle.textContent = 'Зарегистрироваться';
        signUpBtn.textContent = 'Зарегистрироваться';
        emailInp.style.display = 'block';
        loginTitle.textContent = 'У вас уже есть аккаунт?';
        loginBtn.textContent = 'Войти';
    }
});