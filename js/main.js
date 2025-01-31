// Получаем все заголовки h2 на странице
const headers = document.querySelectorAll("h2");

// Находим контейнер для якорных ссылок
const anchorLinksContainer = document.querySelector(".anchor__links");

// Проверяем, если контейнер найден
if (anchorLinksContainer) {

  // Перебираем все заголовки и создаем ссылки
  headers.forEach((header) => {

  headers.forEach((header, index) => {

    const id =
      header.id || header.textContent.trim().toLowerCase().replace(/\s+/g, "-"); // Генерация ID для заголовка
    if (!header.id) header.id = id; // Если у заголовка нет ID, присваиваем его

    // Создаем ссылку
    const anchorLink = document.createElement("a");
    anchorLink.href = `#${id}`;
    anchorLink.textContent = header.textContent;

    // Добавляем ссылку в контейнер
    anchorLinksContainer.appendChild(anchorLink);

  });
}
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
      recommendation = "Рекомендуется обратиться к педиатару.";
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


    // Если это не последняя ссылка, добавляем разделитель
    if (index < headers.length - 1) {
      const separator = document.createElement("span");
      separator.textContent = " | ";
      anchorLinksContainer.appendChild(separator);
    }
  });
}

