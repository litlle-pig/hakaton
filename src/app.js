// Импортируем функции из Firebase SDK
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig"; // Импортируем аутентификацию

// Получаем элементы модальных окон и кнопок
const signInButton = document.getElementById("signInButton");
const signupButton = document.getElementById("signupButton");
const closeSignIn = document.getElementById("closeSignIn");
const closeSignUp = document.getElementById("closeSignUp");
const modalSignIn = document.getElementById("modalSignIn");
const modalSignUp = document.getElementById("modalSignUp");

// Поля для ввода данных
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");

// Открытие модальных окон
signInButton.onclick = function () {
  modalSignIn.style.display = "block";
};

signupButton.onclick = function () {
  modalSignUp.style.display = "block";
};

// Закрытие модальных окон
closeSignIn.onclick = function () {
  modalSignIn.style.display = "none";
};

closeSignUp.onclick = function () {
  modalSignUp.style.display = "none";
};

// Закрытие окна при клике вне модала
window.onclick = function (event) {
  if (event.target === modalSignIn) {
    modalSignIn.style.display = "none";
  }
  if (event.target === modalSignUp) {
    modalSignUp.style.display = "none";
  }
};

// Регистрация пользователя
const signUpSubmit = document.getElementById("signUpSubmit");
signUpSubmit.onclick = function () {
  const email = signUpEmail.value;
  const password = signUpPassword.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Регистрация прошла успешно!");
      modalSignUp.style.display = "none"; // Закрыть окно
    })
    .catch((error) => {
      alert(`Ошибка: ${error.message}`);
    });
};

// Вход пользователя
const signInSubmit = document.getElementById("signInSubmit");
signInSubmit.onclick = function () {
  const email = signInEmail.value;
  const password = signInPassword.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Вы успешно вошли!");
      modalSignIn.style.display = "none"; // Закрыть окно
    })
    .catch((error) => {
      alert(`Ошибка: ${error.message}`);
    });
};
