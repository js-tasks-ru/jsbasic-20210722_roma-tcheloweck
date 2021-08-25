import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this._elem = createElement(`
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title"></h3>
          </div>

          <div class="modal__body"></div>
        </div>

      </div>  
    `);

    document.addEventListener('keydown', this.close);
    this._elem.querySelector('.modal__close').addEventListener('click', this.close);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this._elem);
  }

  setTitle(title) {
    this._elem.querySelector('.modal__title').textContent = title;
  }

  setBody(node) {
    this._elem.querySelector('.modal__body').innerHTML = "";
    this._elem.querySelector('.modal__body').append(node);
  }

  close = (event) => {
    // eslint-disable-next-line curly
    if (event.type === "keydown" && event.code !== "Escape") return;

    document.body.classList.remove('is-modal-open');
    document.removeEventListener('click', close);
    this._elem.remove();
  }

  get elem() {
    return this._elem;
  }
}
