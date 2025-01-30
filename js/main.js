// Получаем все заголовки h2 на странице
const headers = document.querySelectorAll("h2");

// Находим контейнер для якорных ссылок
const anchorLinksContainer = document.querySelector(".anchor__links");

// Проверяем, если контейнер найден
if (anchorLinksContainer) {
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

    // Если это не последняя ссылка, добавляем разделитель
    if (index < headers.length - 1) {
      const separator = document.createElement("span");
      separator.textContent = " | ";
      anchorLinksContainer.appendChild(separator);
    }
  });
}
