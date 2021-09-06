export default function promiseClick(button) {
  return new Promise(resolve => {
    if (!button) reject(new Error("Ошибка! Нет кнопки."));
    button.addEventListener('click', event => resolve(event), { once: true });
  });
}
