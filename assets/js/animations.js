import { introSection, citySummary, createNewElement, createRateCard, createRateCardsContainer } from "./dom-elements";

export async function showErrorMessage(){
    if(document.querySelector(".error")) return;
    
    //console.log("Element creation");
    
    let errorMessage = createNewElement("p", "error");
    errorMessage.textContent = "Error: the city either isn't a big one, or has been mistyped";
    //todo: a shorter and clearer message here
    introSection.append(errorMessage);
}

export async function showData(city){
    citySummary.innerHTML = city.summary;

    let rateCards = [];
    
    city.categories.push({name: "Teleport score", score: city.teleportScore});
    //console.log(city.categories);
    city.categories.forEach(category => rateCards.push(createRateCard(category)));
    //console.log(rateCards);
    createRateCardsContainer(rateCards);
    
}