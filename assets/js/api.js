import { showData, showErrorMessage } from "./animations";
import { City } from "./city";

export async function fetchUrl(city){
    try{
        //todo: do it with axios and lodash
        let response = await fetch(
            `https://api.teleport.org/api/urban_areas/slug:${city.replace(/ /g, "-").toLowerCase()}/scores/`
        );

        if(!response.ok) throw response.status;

        // let cityDetails = await response.json();
        // console.log(cityDetails);
        let cityObj = new City(await response.json());
        // console.log(cityObj);
        showData(cityObj);
    } catch(status){
        showErrorMessage(
            status == 404 ? "City not found, make sure you typed it right" : 
            "Something went wrong, please try later"
        );
    }
}