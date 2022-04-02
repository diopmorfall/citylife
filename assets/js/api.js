import axios from "axios";
import { showData, showErrorMessage } from "./animations";
import { City } from "./city";

export async function fetchUrl(city){
    axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${city.replace(/ /g, "-").toLowerCase()}/scores/`
    )
    .then(response => showData(new City(response.data)))

    .catch(err => showErrorMessage(err.response.status == 404 ?
            "City not found, make sure you typed it right" : 
            "Something went wrong, please try later"
        )
    );
}