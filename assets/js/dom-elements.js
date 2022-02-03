export const introSection = document.querySelector(".intro");
export const slogan = document.querySelector(".slogan");
export const siteName = document.querySelector(".brand");
export const form = document.forms[0];
export const inputField = form.firstElementChild;
export const submitButton = form.lastElementChild;

export const resultSection = document.getElementById("results");
export const cityName = document.querySelector(".city-name");
export const citySummary = document.querySelector(".summary");

export const scoresContainer = document.querySelector(".scores");

export function createNewElement(tag, className){
    let element = document.createElement(tag);
    if(className) element.setAttribute("class", className);
    return element;
}

export function createRateCard(category){
    let rate = createNewElement("div", "rate");

    let rateName = createNewElement("h4");
    rateName.textContent = category.name;
    let rateIcon = createNewElement("img");
    rateIcon.src = `./../assets/img/${/rateName.textContent/gi}.svg`;
    //todo: let regex = new RegExp(`\\b${input}\\b`, "i"); get the image

    let rateScore = createNewElement("p");
    rateScore.textContent = `${category.score.toFixed(1)}/10`;

    rate.append(rateIcon);
    rate.append(rateName);
    rate.append(rateScore);
    //console.log(rate);
    return rate;
}

export function createRateCardsContainer(rateCards){ //* if we could refactor this
    for(let i = 0; i < rateCards.length; i++){
        if(i % 2 != 0 || i == 16){
            let desktopRatesContainer = createNewElement("div", "desk-tab-row");
            desktopRatesContainer.append(rateCards[i]);
            if(i % 2 != 0) desktopRatesContainer.prepend(rateCards[i - 1]);
            scoresContainer.append(desktopRatesContainer);
        }
    }
}