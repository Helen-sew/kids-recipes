const {expect} = require('chai');
const recipeRepository = require('../recipeRepository');
const db = require('../../db');

describe('recipeRepository.create', () => {
    beforeAll(async() => {
        await db.connect();
    });

    afterAll(async() => {
        await db.disconnect();
    });

    it('should return insertedCount when insert a new object', async() => {
        const newItem = await recipeRepository.create({
            
            "title": "Sticky pork lettuce wraps",
            "img": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/04/sticky-pork-lettuce-wraps.jpg?itok=1amjObj6",
            "ingredients": [

                "2 tbsp soy sauce",
                "2 tbsp honey",
                "2 tbsp brown sugar",
                "pinch cinnamon",
                "pinch five-spice powder",
                "4 thin-cut pork loin steaks",
                "1 carrot, sliced into matchsticks",
                "1 lime, juiced",
                "pinch golden caster sugar",
                "1 tbsp rapeseed oil",
                "½ cucumber, cut into matchsticks",
                "16 soft lettuce",
                "leaves (we used Butterhead lettuce)",
                "sweet chilli sauce, to serve"            
    ],

    "toServe": "2 - 4 persons",
    "directions": [
 
        "1. Make the marinade by mixing the soy with the honey, brown sugar, spices and 1 tbsp water. Put the pork in a shallow bowl, pour the marinade over, turning to make sure the steaks are well coated, then leave to marinate for at least 30 mins.",
        "2. Mix the carrot with the lime juice and caster sugar. Brush a piece of foil with oil and line the grill pan. Grill the pork steaks (or griddle if you prefer) for 4 mins each side. Keep an eye on them in case the sugar in the marinade starts to blacken. When cooked, cut the pork into strips.",
        "3. Put the lettuce leaves out on a board and divide the pork between them. Add some carrot and cucumber, then fold in both ends of the lettuce leaf and roll up from one side to contain the filling. Serve with sweet chilli sauce, if you like."
    ],
    "comments": ""
    });
        expect(newItem.insertedCount).to.equal(1);
    });
});