import '.././css/style.css';

import '../img/business freedom.svg';
import '../img/commute.svg';
import '../img/cost of living.svg';
import '../img/economy.svg';
import '../img/education.svg';
import '../img/environmental quality.svg';
import '../img/healthcare.svg';
import '../img/home-bg.svg';
import '../img/housing.svg';
import '../img/internet access.svg';
import '../img/leisure & culture.svg';
import '../img/outdoors.svg';
import '../img/overall score.svg';
import '../img/safety.svg';
import '../img/search.svg';
import '../img/startups.svg';
import '../img/taxation.svg';
import '../img/tolerance.svg';
import '../img/travel connectivity.svg';
import '../img/venture capital.svg';

import { form, inputField } from "./dom-elements";
import { fetchUrl } from "./api"

window.onload = function(){
    form.addEventListener("submit", event => {
        event.preventDefault();
        fetchUrl(inputField.value);
    });
};
