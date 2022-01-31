import { searchSection, citySummary, scoresContainer } from "./dom-elements";

export async function showErrorMessage(){
    if(document.querySelector(".error")) return;
    
    //console.log("Element creation");
    
    let errorMessage = createNewElement("p", "error");
    errorMessage.textContent = "Error: the city either isn't a big one, or has been mistyped";
    //todo: a shorter and clearer message here
    searchSection.append(errorMessage);
}

export async function showData(city){
    citySummary.innerHTML = city.summary + `<br><b>Teleport score:</b> ${city.teleportScore.toFixed(1)}`;

    let rateCards = [];
    city.categories.forEach(category => rateCards.push(createRateCard(category)));
    //console.log(rateCards);
    createRateCardsContainer(rateCards);
    
}

function createNewElement(tag, className){
    let element = document.createElement(tag);
    if(className) element.setAttribute("class", className);
    return element;
}

function createRateCard(category){
    let rate = createNewElement("div", "rate");
    let rateName = createNewElement("h4");
    rateName.textContent = category.name;
    let rateScore = createNewElement("p");
    rateScore.textContent = `${category.score.toFixed(1)}/10`;
    //todo: add the icon
    rate.append(rateName);
    rate.append(rateScore);
    //console.log(rate);
    return rate;
}

function createRateCardsContainer(rateCards){ //* if we could refactor this
    for(let i = 0; i < rateCards.length; i++){
        if(i % 2 != 0 || i == 16){
            let desktopRatesContainer = createNewElement("div", "desk-tab-row");
            desktopRatesContainer.append(rateCards[i]);
            if(i % 2 != 0) desktopRatesContainer.prepend(rateCards[i - 1]);
            scoresContainer.append(desktopRatesContainer);
        }
    }
}