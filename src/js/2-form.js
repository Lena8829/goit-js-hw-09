/* 
 * Використовуючи делегуваня, відстежуй на формі подію input 
 
 * і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. 
 
 * Нехай ключем для сховища буде рядок "feedback-form-state".

 * Під час завантаження сторінки перевіряй стан сховища,
 
 * і якщо там є збережені дані, то заповнюй ними поля форми. 
 
 * В іншому випадку поля повинні бути порожніми.

 * Під час сабміту форми очищай сховище і поля форми,

* а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
*/

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', textInput); // monitor the input event on the form
form.addEventListener('submit', handleSubmit); // monitor the submit event on the form

storageStatus();
//--------------------------------------------------------------------------------

function textInput(event) {
  const formData = {
    email: form.email.value.trim(), // remove spaces with 'trim()'
    message: form.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); // saving data and make obj ---> a string
}
//------------------------------------------------------------------------------

function storageStatus() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)); // checking storage status

  if (savedData) {
    const { email, message } = savedData;
    form.email.value = email || '';
    form.message.value = message || '';
  }
} // previous data stay in fields
//---------------------------------------------------------------------------------

function handleSubmit(event) {
  event.preventDefault(); // prevent to reload page after submit

  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // if all fields are filled
  if (email && message) {
    console.log({ email, message });

    event.currentTarget.reset(); // clear the form after sumbit
    localStorage.removeItem(STORAGE_KEY); // clear the storage after page reload
  }
}
