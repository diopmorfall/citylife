import { introSection, resultSection, citySummary, createNewElement, createRateCard, createRateCardsContainer, rateCards, updateScores } from "./dom-elements";

export async function showErrorMessage(){
    if(document.querySelector(".error")) return;
    
    let errorMessage = createNewElement("p", "error");
    errorMessage.textContent = "Error: the city either isn't a big one, or has been mistyped";
    //todo: a shorter and clearer message here
    introSection.append(errorMessage);
}

export async function showData(city){
    citySummary.innerHTML = city.summary;

    if(rateCards.length == 0){ 
        //console.log("No cards here, we're creating them", rateCards.length);
        let rates = [];
        city.categories.forEach(category => rates.push(createRateCard(category)));
        createRateCardsContainer(rates);
        resultSection.style.display = 'flex';
    } else {
        //console.log("Cards are here", rateCards.length);
        for(let card of rateCards){
            let currentCategory = city.categories.find(category => category.name === card.children[1].textContent);
            updateScores(card, currentCategory.score);
        }
    }
}