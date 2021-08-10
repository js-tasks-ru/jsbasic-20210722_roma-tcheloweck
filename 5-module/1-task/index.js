function hideSelf() {
  let button = document.querySelector('.hide-self-button');

  function onHidden() {
    button.setAttribute('hidden', '');
  }

  button.addEventListener('click', onHidden, { once: true });
}
