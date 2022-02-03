import { introSection, citySummary, scoresContainer, createNewElement, createRateCard, createRateCardsContainer } from "./dom-elements";

export async function showErrorMessage(){
    if(document.querySelector(".error")) return;
    
    //console.log("Element creation");
    
    let errorMessage = createNewElement("p", "error");
    errorMessage.textContent = "Error: the city either isn't a big one, or has been mistyped";
    //todo: a shorter and clearer message here
    introSection.append(errorMessage);
}

export async function showData(city){
    citySummary.innerHTML = city.summary + `<br><b>Teleport score:</b> ${city.teleportScore.toFixed(1)}`;

    let rateCards = [];
    city.categories.forEach(category => rateCards.push(createRateCard(category)));
    //console.log(rateCards);
    createRateCardsContainer(rateCards);
    
}