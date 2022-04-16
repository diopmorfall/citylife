import { introSection, resultSection, citySummary, createNewElement, createRateCard, createRateCardsContainer, rateCards, updateScores } from "./dom-elements";

export async function showErrorMessage(message, targetElement){
    if(targetElement.querySelector(".error")) return;
    
    let errorMessage = createNewElement("p", "error");
    errorMessage.textContent = message;
    targetElement.append(errorMessage);
}

export async function showData(city){
    if(introSection.querySelector(".error"))
        introSection.removeChild(introSection.querySelector(".error"));

    citySummary.innerHTML = city.summary;
    if(citySummary.innerHTML === "City overview not available")
        showErrorMessage("We're sorry that some data wasn't correctly retrieved, please try later", resultSection);

    if(rateCards.length == 0){
        let rates = [];
        city.categories.forEach(category => rates.push(createRateCard(category)));
        createRateCardsContainer(rates);
        resultSection.style.display = 'flex';
    } else {
        for(let card of rateCards){
            let currentCategory = city.categories.find(
                category => category.name.toUpperCase() === card.children[1].textContent
            );

            updateScores(card, currentCategory.score);
        }
    }
    resultSection.scrollIntoView(true);
}