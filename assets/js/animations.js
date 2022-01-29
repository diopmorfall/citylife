import { searchSection } from "./dom-elements";

export async function showErrorMessage(){
    //console.log("Element creation");
    //todo: this should appear only once, if it's already there, don't create another one
    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("class", "error");
    errorMessage.textContent = "Error: the city either isn't a big one, or has been mistyped";
    searchSection.append(errorMessage);
}

export async function showData(city){
    //todo: get the data first, and show it in each element
}