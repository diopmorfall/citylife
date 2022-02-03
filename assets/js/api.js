import { showData, showErrorMessage } from "./animations";
import { City } from "./city";

export async function fetchUrl(city){
    try{
        //todo: do it with axios and lodash
        let response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city.replace(/ /g, "-")}/scores/`);
        if(!response.ok) throw new Error();

        //let cityDetails = await response.json();
        //console.log(cityDetails);
        let cityObj = new City(await response.json());
        console.log(cityObj);
        showData(cityObj);
    } catch(error){
        showErrorMessage();
    }
}