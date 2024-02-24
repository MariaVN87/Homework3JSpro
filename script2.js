/* Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва(при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage). */


// Получаем элементы
const productsList = document.getElementById('products-list');
const reviewsContainer = document.getElementById('reviews-container');

// Функция для отображения отзывов по продукту
function showReviews(productName) {
    reviewsContainer.innerHTML = ''; // Очищаем контейнер

    const reviews = JSON.parse(localStorage.getItem(productName)) || [];

    reviews.forEach((review, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.innerHTML = `<p><strong>Отзыв ${index + 1}:</strong>${review}</p>
        <button onclick="deleteReview('${productName}', ${index})">Удалить</button>`;
        reviewsContainer.appendChild(reviewItem);
    });
}

// Функция для удаления отзыва
function deleteReview(productName, index) {
    const reviews = JSON.parse(localStorage.getItem(productName)) || [];
    reviews.splice(index, 1);
    localStorage.setItem(productName, JSON.stringify(reviews));
    showReviews(productName); // Перерисовываем отзывы
}

// Заполняем список продуктов
const products = Object.keys(localStorage);
products.forEach(product => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = product;
    link.addEventListener('click', () => showReviews(product));
    const li = document.createElement('li');
    li.appendChild(link);
    productsList.appendChild(li);
});