import Popup from './Popup';
export class PopupRegister extends Popup {
  constructor(popupName, api, messagePopup) {
    super(popupName);
    this.userMail = document.querySelector('#user-mail');
    this.userName = document.querySelector('#user-name');
    this.userPassword = document.querySelector('#user-password');
    this.form = this.popup.querySelector('#register-form');
    this.api = api;
    this.messagePopup = messagePopup;    
  }

  open = () => {
    super.open();
    super.clearForm();
    this._setSubmitListeners();

  }

  _register = (event) => {
    event.preventDefault();
    const newUserInfo = {
      name: this.userName.value,
      email: this.userMail.value,
      password: this.userPassword.value,
    }
    // this.formValidator(this.form).checkFormValid();
    this.api.signUp(newUserInfo)
      .then((res) => {
        super.close();
        this.messagePopup.open();

      })
      .catch((err) => {
        this.popup.querySelector('.popup__error-message_centred').textContent = err.message;
      })
  }

  _setSubmitListeners() {
    this.form.addEventListener('submit', this._register);
  }
}
