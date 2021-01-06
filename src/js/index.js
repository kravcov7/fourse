import "../blocks/style.css";
import { loginPopup, messagePopup, registerPopup, loginButton, registerButton, loginButtonHeader, resultContainer, cardTemplate, searchForm, searchWord, resultMoreButton, messagePopupLoginButton, headerIcon } from './constants/constants'
import { newsApiServer, mainApiServer } from './config/config';

import { PopupLogin } from './components/PopupLogin';

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
require("../images/lang.png");
require("../images/18+.png");
require("../images/zast.jpg");
require("../images/yag.jpg");
require("../images/popup-close-white.svg");

// const mainApi = new MainApi(mainApiServer);
// const header = new Header();
const popupLogin = new PopupLogin(loginPopup);

loginButtonHeader.addEventListener('click', () => popupLogin.open());