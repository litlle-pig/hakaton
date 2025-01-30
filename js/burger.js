var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("nav-active");
});

// Функция для открытия модального окна
function openModal(type) {
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modalTitle");

  // Меняем заголовок в зависимости от типа
  if (type === "login") {
    modalTitle.textContent = "Вход";
  } else if (type === "signup") {
    modalTitle.textContent = "Регистрация";
  }

  modal.style.display = "block"; // Показываем модальное окно
}

// Функция для закрытия модального окна
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none"; // Прячем модальное окно
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};
