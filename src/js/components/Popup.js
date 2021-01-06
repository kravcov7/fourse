export default class Popup{
  constructor(popupName) {
    this.popup = popupName;
    this.close = this.close.bind(this);
  }

  open() {
    this.popup.classList.remove('hidden');
    this._setListeners();
  }

  _setListeners() {
    this.popup.querySelector('.popup__close').addEventListeners('click', this.close)
  }

  close() {
    this.popup.closest('.popup').classList.add('.hidden');
  }
}