import axios from "axios";
import { showData, showErrorMessage } from "./animations";
import { introSection } from "./dom-elements";
import { City } from "./city";

export async function fetchUrl(city){
    try {
        let response = await axios.get(
            `https://api.teleport.org/api/urban_areas/slug:${city.replace(/ /g, "-").toLowerCase()}/scores/`
        );
        showData(new City(response.data));
    } catch(error) {
        showErrorMessage(error.response.status == 404 ?
            "City not found, make sure you typed it right" : 
            "Something went wrong, please try later",
            introSection
        );
    }
}