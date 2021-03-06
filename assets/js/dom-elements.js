import { showErrorMessage } from "./animations";

const homePage = document.querySelector(".home");
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
export let rateCards = document.getElementsByClassName("rate");


inputField.addEventListener("focus", () => {
    homePage.style.height = "100vh";
});

export function createNewElement(tag, className){
    let element = document.createElement(tag);
    if(className) element.setAttribute("class", className);
    return element;
}

export function createRateCard(category){
    let rate = createNewElement("div", "rate");
    let rateName = createNewElement("h4");
    let rateIcon = createNewElement("img", "icon");
    let rateScore = createNewElement("p");

    rateName.textContent = category.name.toUpperCase();
    rateScore.textContent = formatScore(category.score, rateName.textContent);
    rateIcon.src = `./img/${rateName.textContent.toLowerCase()}.svg`;
    
    rate.append(rateIcon);
    rate.append(rateName);
    rate.append(rateScore);
    return rate;
}

export function createRateCardsContainer(rates){
    for(let i = 0; i < rates.length; i++){
        if(i % 2 != 0){
            let desktopRatesContainer = createNewElement("div", "desk-tab-row");
            desktopRatesContainer.append(rates[i - 1]);
            desktopRatesContainer.append(rates[i]);
            scoresContainer.append(desktopRatesContainer);
        }
    }
}

export function updateScores(card, score){
    card.children[2].textContent = formatScore(score, card.children[1].textContent);
}

function formatScore(value, categoryTitle){
    if(typeof value === "string"){
        showErrorMessage("We're sorry some values weren't correctly retrieved, please try later", resultSection);
        return value;
    }

    value = value.toFixed(1);

    if(value == Math.floor(value)){
        value = Math.floor(value);
    }

    if(categoryTitle === "OVERALL SCORE"){
        return value;
    }

    return `${value}/10`;
}