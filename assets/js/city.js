export class City {
    constructor(details){
        this.summary = details.summary;
        this.teleportScore = details.teleport_city_score;
        this.categories = [];
        details.categories.forEach(category => { //* return the properties of each object
            this.categories.push({
                name: category.name,
                score: category.score_out_of_10,
                color: category.color,
            });
        });
    }
    
}

/*
return {
                name: category.name,
                score: category.score_out_of_10,
                color: category.color,
            }
*/