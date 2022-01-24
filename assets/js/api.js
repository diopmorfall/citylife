let url = "https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/";

export async function fetchUrl(city){
    try{
        let response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city.replace(/ /g, "-")}/scores/`);
        let data = await response.json();
        console.log(data);
    } catch(error){
        console.warn(error);
        //todo: errors: city not found because it isn't in the database or it was misspelled
        //todo: create a red div with the error message
    }
}