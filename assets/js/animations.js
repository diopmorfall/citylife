import { searchSection } from "./dom-elements";

export async function showErrorMessage(){
    if(document.querySelector(".error")) return;
    
    //console.log("Element creation");
    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("class", "error");
    errorMessage.textContent = "Error: the city either isn't a big one, or has been mistyped";
    searchSection.append(errorMessage);
}

export async function showData(city){
    //todo: get the data first, and show it in each element
}