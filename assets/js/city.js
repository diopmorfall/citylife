import { get } from "lodash";
export class City {
    constructor(details){
        this.summary = get(details, "summary", 'City overview not available');
        this.categories = get(details, 'categories', []);
        this.categories.forEach(category => {
            category.score = get(category, 'score_out_of_10', 'n.a.');
            delete category.color;
            delete category.score_out_of_10;
        });

        this.categories.push({
            name: "Teleport score",
            score: get(details, "teleport_city_score", "n.a.")
        });
    }
    
}
