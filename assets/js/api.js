import { showErrorMessage } from "./animations";
import { City } from "./city";

export async function fetchUrl(city){
    try{
        let response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city.replace(/ /g, "-")}/scores/`);
        if(!response.ok) throw new Error();

        //let cityDetails = await response.json();
        //console.log(cityDetails);
        let cityObj = new City(await response.json());
        console.log(cityObj);
    } catch(error){
        showErrorMessage();
    }
}