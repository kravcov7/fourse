export default class Popup{
  constructor(popupName) {
    this.popup = popupName;
    this.close = this.close.bind(this);
  }

  open() {
    this.popup.classList.remove('hidden');
    this._setListeners();
    document.querySelector('.body').append(this.popup);
  }

  close() {
    this.popup.closest('.popup').classList.add('hidden');
    console.log(this.popup)
  }

   _setListeners() {
    this.popup.querySelector('.popup__close').addEventListener('click', this.close);
  }

}