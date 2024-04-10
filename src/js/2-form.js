/* 
 * Використовуючи делегуваня, відстежуй на формі подію input 
 
 * і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
 
 * Нехай ключем для сховища буде рядок "feedback-form-state".

 Під час завантаження сторінки перевіряй стан сховища,
 
 і якщо там є збережені дані, то заповнюй ними поля форми. 
 
 В іншому випадку поля повинні бути порожніми.

 Під час сабміту форми очищай сховище і поля форми,

 а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
*/

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', textInput); // monitor the input event on the form

function textInput(event) {
  const savedData = {
    email: form.email.value.trim(), // remove spaces with 'trim()'
    message: form.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData)); // saving data and make obj ---> a string
}
