/* Создайте интерактивную веб - страницу для оставления и просмотра отзывов о продуктах.Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

 */

const productName = document.querySelector('.product-name');
const inputFeedback = document.querySelector('.input-feedback');
const addBtn = document.querySelector('.add-button');


addBtn.addEventListener('click', () => {
    const product = productName.value;
    const review = inputFeedback.value;
    if (product !== "" && review !== "") {
        let store = JSON.parse(localStorage.getItem(product));
        if (store === null) {
            store = []
        }
        store.push(review);
        localStorage.setItem(product, JSON.stringify(store));
        productName.value = '';
        inputFeedback.value = '';
    } else {
        alert('Пожалуйста, заполните все поля');
    }
});



