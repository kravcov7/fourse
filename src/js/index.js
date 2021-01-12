import "../blocks/style.css";
import { lk, loginPopup, messagePopup, registerPopup, loginButton, registerButton, loginButtonHeader, resultContainer, cardTemplate, searchForm, searchWord, resultMoreButton, messagePopupLoginButton, headerIcon } from './constants/constants'
import { newsApiServer, mainApiServer } from './config/config';

require("../images/лого бел v2.png");
require("../images/loupe.png");
require("../images/baby.png");
require("../images/user.png");
require("../images/beauty.png");
require("../images/art.png");
require("../images/science.png");
require("../images/program.png");
require("../images/sev-dev.png");
require("../images/sport.png");
require("../images/hobbies.png");
require("../images/sci.png");
require("../images/hobbi.png");
require("../images/lan.png");
require("../images/progr.png");
require("../images/sev-d.png");
require("../images/spo.png");
require("../images/art1.png");
require("../images/bab.png");
require("../images/18.png");
require("../images/beat.png");
require("../images/lang.png");
require("../images/18+.png");
require("../images/lk2.png");
require("../images/zast.jpg");
require("../images/yag.jpg");
require("../images/logo2.jpg");
require("../images/jul.jpg");
require("../images/f1.svg");
require("../images/popup-close-white.svg");

import { PopupLogin } from './components/PopupLogin';
import { PopupRegister } from './components/PopupRegister';
import { PopupMessage } from './components/PopupMessage';
import { MainApi } from './api/MainApi';
import { Header } from './components/Header';
import { FormValidator } from './components/FormValidator';
import { errorMessages } from "./constants/errorMessages";
import { Lk } from "./components/Lk";
import Popup from "./components/Popup";



const mainApi = new MainApi(mainApiServer);
const header = new Header(mainApi);
// const formValidator = (...arg) => new FormValidator(...arg);
const popupMessage = new PopupMessage(messagePopup);
const popupRegister = new PopupRegister(registerPopup, mainApi, popupMessage);
const popupLogin = new PopupLogin(loginPopup, mainApi, header);
const validateLogin = new FormValidator(loginPopup, errorMessages);
const validate = new FormValidator(registerPopup, errorMessages);


loginButtonHeader.addEventListener('click', () => popupLogin.open());
registerButton.addEventListener('click', () => {
  popupLogin.close();
  popupRegister.open();
});
loginButton.addEventListener('click', () => {
  popupRegister.close();
  popupLogin.open();
});
messagePopupLoginButton.addEventListener('click', () => {
  popupMessage.close();
  popupLogin.open();
});
lk.addEventListener('click', console.log('ccc'))