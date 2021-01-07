import Popup from './Popup';
export class PopupMessage extends Popup {
  constructor(popupName, api, header, formValidator) {
    super(popupName);
    this.form = this.popup.querySelector('#login-form');
    this.api = api;
    this.header = header;
    this.formValidator = formValidator;

  }

}