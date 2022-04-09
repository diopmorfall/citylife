import { introSection, resultSection, citySummary, createNewElement, createRateCard, createRateCardsContainer, rateCards, updateScores } from "./dom-elements";

export async function showErrorMessage(message, targetElement){
    if(document.querySelector(".error")) return;
    
    let errorMessage = createNewElement("p", "error");
    
    errorMessage.textContent = message;
    //todo: a shorter and clearer message here
    targetElement.append(errorMessage);
}

export async function showData(city){
    if(document.querySelector(".error")) //todo: refactor needed
        introSection.removeChild(document.querySelector(".error"));

    citySummary.innerHTML = city.summary;
    if(citySummary.innerHTML === "City overview not available")
        showErrorMessage("We're sorry that some values weren't correctly retrieved, please try later", resultSection);

    if(rateCards.length == 0){ 
        //console.log("No cards here, we're creating them", rateCards.length);
        let rates = [];
        city.categories.forEach(category => rates.push(createRateCard(category)));
        createRateCardsContainer(rates);
        resultSection.style.display = 'flex';
    } else {
        //console.log("Cards are here", rateCards.length);
        for(let card of rateCards){
            let currentCategory = city.categories.find(
                category => category.name.toUpperCase() === card.children[1].textContent
            );

            updateScores(card, currentCategory.score);
        }
    }
    resultSection.scrollIntoView({behavior: "smooth"});
}