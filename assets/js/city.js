export class City {
    constructor(details){
        this.summary = details.summary;
        this.categories = [];
        
        details.categories.forEach(category => {
            this.categories.push({
                name: category.name,
                score: category.score_out_of_10,
                color: category.color,
            });
        });

        this.categories.push({
            name: "Teleport score",
            score: details.teleport_city_score
        });
    }
    
}
