import '.././css/style.css';
import { form, inputField } from "./dom-elements";
import { fetchUrl } from "./api"

window.onload = function(){
    form.addEventListener("submit", event => {
        event.preventDefault();
        fetchUrl(inputField.value);
    });
};
