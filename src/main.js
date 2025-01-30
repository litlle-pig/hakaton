import firebase from "firebase/app";
import "firebase/auth"; // Для аутентификации
import "firebase/firestore"; // Для работы с Firestore
import { firebaseConfig } from "./config"; // Подключаем конфигурацию Firebase

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
