function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let textElement = document.getElementById('text');

  if (!button || !textElement) return;

  function toggleVisibility() {
    if (textElement.hasAttribute('hidden')) {
      textElement.removeAttribute('hidden');
    } else {
      textElement.setAttribute('hidden', '');
    }
  }

  button.addEventListener('click', toggleVisibility);
}
