const passkeyInput = document.getElementById('passkey');
const mainView = document.querySelector('.view')
let form = document.getElementById('login-page');
let msg = document.querySelectorAll('.msg article')
let loginbtn = document.getElementById('Login')
let passMsg = document.querySelector('.access')
let errorMsg = document.querySelector('.error')
let closeBtn = document.querySelector('.close')

let user = {
 name: 'Dev',
 password: '2023'
}

let error = () => {
 alert('Access Denied')
 location.reload()
}

let signIn = () => {
 passMsg.style.opacity = 1;
 fade()
window.location.href = "https://www.apple.com/";
}

let auth = (e) => {
 e.preventDefault();
 
 const passkey = 
 user.name === form.username.value && user.password === form.passkey.value 
 ? signIn()
 : error()
 
}

loginbtn.addEventListener('click', (e) => {
 e.preventDefault();
 
const passkey = 
 user.name === form.username.value && user.password === form.passkey.value 
 ? signIn()
 : error()
 
});

let fade = () => {
 passMsg.style.opacity = 1 && mainView.classList.toggle('show');
 
 passMsg.style.opacity = 1 && errorMsg.classList.toggle('vanish')
}

let closeMsg = () => {
 //e.preventDefault();
 msg.classList.toggle('vanish')
}

let close = () => {
 //e.preventDefault();
 msg.classList.toggle('vanish')
}