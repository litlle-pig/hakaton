// // Получаем все заголовки h2 на странице
// const headers = document.querySelectorAll("h2");

// // Находим контейнер для якорных ссылок
// const anchorLinksContainer = document.querySelector(".anchor__links");

// // Проверяем, если контейнер найден
// if (anchorLinksContainer) {
//   // Перебираем все заголовки и создаем ссылки
//   headers.forEach((header) => {
//     headers.forEach((header, index) => {
//       const id =
//         header.id ||
//         header.textContent.trim().toLowerCase().replace(/\s+/g, "-"); // Генерация ID для заголовка
//       if (!header.id) header.id = id; // Если у заголовка нет ID, присваиваем его

//       // Создаем ссылку
//       const anchorLink = document.createElement("a");
//       anchorLink.href = `#${id}`;
//       anchorLink.textContent = header.textContent;

//       // Добавляем ссылку в контейнер
//       anchorLinksContainer.appendChild(anchorLink);
//     });
//   });
// }
document
  .getElementById("consultationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const descriptionInput = document.getElementById("description");
    const description = descriptionInput.value.trim();
    const recommendationDiv = document.getElementById("recommendation");

    if (!description) {
      recommendationDiv.textContent = "Пожалуйста, опишите проблему.";
      recommendationDiv.style.display = "block";
      return;
    }

    let recommendation;

    if (description.includes("ребенок")) {
      recommendation = "Рекомендуется обратиться к педиатру.";
    } else if (description.includes("сердце")) {
      recommendation = "Рекомендуется обратиться к кардиологу.";
    } else if (description.includes("глаз")) {
      recommendation = "Рекомендуется обратиться к офтальмологу.";
    } else if (description.includes("кожа")) {
      recommendation = "Рекомендуется обратиться к дерматологу.";
    } else {
      recommendation = "Вам следует проконсультироваться с терапевтом.";
    }

    recommendationDiv.innerHTML = `<strong>Рекомендация:</strong> ${recommendation}`;
    recommendationDiv.style.display = "block";

    // Очистка поля ввода
    descriptionInput.value = "";
  });

// // Получаем элементы
// const signupButton = document.getElementById("signupButton");
// const signupModal = document.getElementById("signupModal");
// const closeButton = document.getElementsByClassName("close")[0];
// const signupForm = document.getElementById("signupForm");
// const navSing = document.getElementById("navSing");

// // Открытие модального окна при нажатии на кнопку "Регистрация"
// signupButton.onclick = function () {
//   signupModal.style.display = "block";
// };

// // Закрытие модального окна при нажатии на кнопку закрытия
// closeButton.onclick = function () {
//   signupModal.style.display = "none";
// };

// // Закрытие модального окна при клике вне модального окна
// window.onclick = function (event) {
//   if (event.target == signupModal) {
//     signupModal.style.display = "none";
//   }
// };

// // Логика регистрации (сохранение имени и замена кнопок на имя пользователя)
// signupForm.onsubmit = function (event) {
//   event.preventDefault(); // Останавливаем отправку формы

//   // Получаем имя пользователя из формы
//   const username = document.getElementById("username").value;

//   // Обновляем навигацию (заменяем кнопки на имя пользователя)
//   navSing.innerHTML = `<span> ${username}</span>`;

//   // Закрыть модальное окно
//   signupModal.style.display = "none";
// };

const modalSignIn = document.getElementById("modalSignIn");
const modalSignUp = document.getElementById("modalSignUp");
const signInButton = document.getElementById("signInButton");
const signupButton = document.getElementById("signupButton");
const closeSignIn = document.getElementById("closeSignIn");
const closeSignUp = document.getElementById("closeSignUp");

signInButton.onclick = function () {
  modalSignIn.style.display = "block";
};

signupButton.onclick = function () {
  modalSignUp.style.display = "block";
};

closeSignIn.onclick = function () {
  modalSignIn.style.display = "none";
};

closeSignUp.onclick = function () {
  modalSignUp.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalSignIn) {
    modalSignIn.style.display = "none";
  }
  if (event.target === modalSignUp) {
    modalSignUp.style.display = "none";
  }
};
